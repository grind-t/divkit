// Generated code. Do not modify.

import { Exact, IntBoolean, NonEmptyArray } from '../helper';
import { TemplateBlock, Type } from '../template';
import { DivExpression } from '../safe-expression';

export class DivVideoSource<T extends DivVideoSourceProps = DivVideoSourceProps> {
    readonly _props?: Exact<DivVideoSourceProps, T>;

    readonly type = 'video_source';
    /**
     * Media file bitrate: Data transfer rate in a video stream, measured in kilobits per second
     * (kbps).
     */
    bitrate?: Type<number | DivExpression>;
    /**
     * MIME type (Multipurpose Internet Mail Extensions): A string that defines the file type and
     * helps process it correctly.
     */
    mime_type: Type<string | DivExpression>;
    /**
     * Media file resolution.
     */
    resolution?: Type<DivVideoSourceResolution>;
    /**
     * Link to the media file available for playback or download.
     */
    url: Type<string | DivExpression>;

    constructor(props: Exact<DivVideoSourceProps, T>) {
        this.bitrate = props.bitrate;
        this.mime_type = props.mime_type;
        this.resolution = props.resolution;
        this.url = props.url;
    }
}

export interface DivVideoSourceProps {
    /**
     * Media file bitrate: Data transfer rate in a video stream, measured in kilobits per second
     * (kbps).
     */
    bitrate?: Type<number | DivExpression>;
    /**
     * MIME type (Multipurpose Internet Mail Extensions): A string that defines the file type and
     * helps process it correctly.
     */
    mime_type: Type<string | DivExpression>;
    /**
     * Media file resolution.
     */
    resolution?: Type<DivVideoSourceResolution>;
    /**
     * Link to the media file available for playback or download.
     */
    url: Type<string | DivExpression>;
}

/**
 * Media file resolution.
 */
export class DivVideoSourceResolution<T extends DivVideoSourceResolutionProps = DivVideoSourceResolutionProps> {
    readonly _props?: Exact<DivVideoSourceResolutionProps, T>;

    readonly type = 'resolution';
    /**
     * Media file frame height.
     */
    height: Type<number | DivExpression>;
    /**
     * Media file frame width.
     */
    width: Type<number | DivExpression>;

    constructor(props: Exact<DivVideoSourceResolutionProps, T>) {
        this.height = props.height;
        this.width = props.width;
    }
}

export interface DivVideoSourceResolutionProps {
    /**
     * Media file frame height.
     */
    height: Type<number | DivExpression>;
    /**
     * Media file frame width.
     */
    width: Type<number | DivExpression>;
}
