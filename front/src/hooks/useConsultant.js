import { useState, useEffect } from 'react';

const useConsultant = (apiEndpoint) => {
    const [data, setData] = useState([]);
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    });

    const fetchData = async () => {
        try {
        setLoading(true);
        const response = await fetch(apiEndpoint, { headers });
        const data = await response.json();
        setData(data);
        setError(null);
        } catch (error) {
        setError('Une erreur est survenue lors de la récupération des données.');
        } finally {
        setLoading(false);
        }
    };

    const getById = async (itemId) => {
        try {
        setLoading(true);
        const response = await fetch(`${apiEndpoint}/${itemId}`, { headers });
        const itemData = await response.json();
        setItem(itemData);
        setError(null);
        return itemData;
        } catch (error) {
        setError('Une erreur est survenue lors de la récupération de l\'élément.');
        } finally {
        setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        getById(localStorage.getItem("currentUser"));
    }, []);

    const createItem = async (newItem) => {
        try {
        setLoading(true);
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(newItem),
        });
        const createdItem = await response.json();
        setData([...data, createdItem]);
        setError(null);
        } catch (error) {
        setError('Une erreur est survenue lors de la création de l\'élément.');
        } finally {
        setLoading(false);
        }
    };

    const updateItem = async (itemId, updatedItem) => {
        try {
        setLoading(true);
        const response = await fetch(`${apiEndpoint}/${itemId}`, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(updatedItem),
        });
        const updatedItemData = await response.json();
        const updatedData = data.map(item => item.id === itemId ? updatedItemData : item);
        setData(updatedData);
        setError(null);
        } catch (error) {
        setError('Une erreur est survenue lors de la mise à jour de l\'élément.');
        } finally {
        setLoading(false);
        }
    };

    const deleteItem = async (itemId) => {
        try {
        setLoading(true);
        await fetch(`${apiEndpoint}/${itemId}`, {
            method: 'DELETE',
            headers: headers,
        });
        const updatedData = data.filter(item => item.id !== itemId);
        setData(updatedData);
        setError(null);
        } catch (error) {
        setError('Une erreur est survenue lors de la suppression de l\'élément.');
        } finally {
        setLoading(false);
        }
    };

    return {
        data,
        loading,
        error,
        item,
        createItem,
        updateItem,
        deleteItem,
    };
};

export default useConsultant;
