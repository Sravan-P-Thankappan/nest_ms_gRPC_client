import { Controller, Get, Inject,OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices/interfaces';
import { Observable } from 'rxjs'

interface MessageService {

    chat(data: {msg:string}): Observable<any>;
    
}
 

@Controller('message')  
export class MessageController implements OnModuleInit {

    private msgService:MessageService
        
    constructor(@Inject('MESSAGE_PACKAGE') private client: ClientGrpc) { }

    onModuleInit() {
        this.msgService = this.client.getService<MessageService>('MessageController')
    }


    @Get()
    getMessage()
    { 
        return this.msgService.chat({msg:'hello'})
    }
}

 




