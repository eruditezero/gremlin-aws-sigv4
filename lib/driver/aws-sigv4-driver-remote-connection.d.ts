export = AwsSigV4DriverRemoteConnection;
/**
 * @extends {gremlin.driver.RemoteConnection}
 */
declare class AwsSigV4DriverRemoteConnection {
    constructor(host: any, port: any, options?: {}, cbConnected?: any, cbDisconnected?: any, cbError?: any);
    host: any;
    port: any;
    options: {};
    cbConnected: any;
    cbDisconnected: any;
    cbError: any;
    secure: any;
    try: number;
    maxRetry: any;
    clientOptions: {
        mimeType: string;
        pingEnabled: boolean;
        pingInterval: number;
        pongTimeout: number;
    };
    _rejections: {};
    _connect(): void;
    _statusCallback(error: any, response: any, body: any): void;
    _connectSocket(): void;
    _client: any;
    _logHandler(log: any): void;
    _connectHandler(): void;
    _closeHandler(code: any, message: any): void;
    _errorHandler(error: any): void;
    _cancelPendingQueries(error: any): void;
    /** @override */
    override open(): void;
    /** @override */
    override submit(bytecode: any): Promise<any>;
    /** @override */
    override close(): any;
}
