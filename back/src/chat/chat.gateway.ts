import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
    MessageBody,
    WsResponse,
  } from '@nestjs/websockets';
import { Observable, from, map } from 'rxjs';
  import { Socket, Server } from 'socket.io';

  @WebSocketGateway({
    cors: {
      origin: '*',
    },
  })
  export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    
    @WebSocketServer()
    server: Server;
  
    @SubscribeMessage('message')
    handleMessage(client: Socket, message: string): void {
      this.server.emit('message', message); // Diffuse le message à tous les clients connectés
    }

    // @SubscribeMessage('message')
    // findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
    //   return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
    // }
  
    handleConnection(client: Socket): void {
      console.log(`Client connected: ${client.id}`);
    }
  
    handleDisconnect(client: Socket): void {
      console.log(`Client disconnected: ${client.id}`);
    }
  }
  