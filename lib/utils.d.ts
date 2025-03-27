/**
 * Generates a random uuid
 */
export function uuid(): string;
/**
 * Calculates the AWS Signature 4 for IAM authentication on Neptune
 */
export function getUrlAndHeaders(host: any, port: any, credentials: any, canonicalUri: any, protocol: any): {
    url: string;
    headers: any;
};
/**
 * Callbackify native http(s) get
 */
export function request(url: any, options: any, cb: any): void;
