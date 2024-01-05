import type {
    Awaitable,
    Dictionary,
    PlaywrightCrawlingContext,
    Request,
} from 'crawlee';


export type HandleParameters<UserData extends Dictionary = Dictionary> = (
    ctx: Omit<PlaywrightCrawlingContext, 'request'> & {
        request: Request<UserData>;
    },
) => Awaitable<void>;
