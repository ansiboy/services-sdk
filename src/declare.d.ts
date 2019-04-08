// socket.io
declare namespace socket {
    namespace io {
        type SocketEvent = 'connect' | 'connect_error' | 'connect_timeout' | 'error' | 'disconnect' |
            'reconnect' | 'reconnect_error' | 'reconnect_failed' | 'ping' | 'pong'

        interface Socket {
            disconnect(): void;
            id: string,
            on<T>(event: SocketEvent | T, callback: Function): void
        }
    }
}
declare module 'socket.io' {
    function io(url: string, args?: { query?: object }): socket.io.Socket;

    export = io;
}

declare let process: any