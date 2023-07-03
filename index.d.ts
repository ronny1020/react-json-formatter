import { CSSProperties } from 'react';
export type JsonObject = {
    [key: string]: JsonObject;
} | string | number | boolean | null | undefined;
interface JsonStyle {
    booleanStyle?: CSSProperties;
    braceStyle?: CSSProperties;
    bracketStyle?: CSSProperties;
    commaStyle?: CSSProperties;
    falseStyle?: CSSProperties;
    nullStyle?: CSSProperties;
    numberStyle?: CSSProperties;
    propertyStyle?: CSSProperties;
    stringStyle?: CSSProperties;
    style?: CSSProperties;
    tabSpaceStyle?: CSSProperties;
    trueStyle?: CSSProperties;
}
interface JsonClassName {
    booleanClassName?: string;
    braceClassName?: string;
    bracketClassName?: string;
    className?: string;
    commaClassName?: string;
    falseClassName?: string;
    nullClassName?: string;
    numberClassName?: string;
    propertyClassName?: string;
    stringClassName?: string;
    tabSpaceClassName?: string;
    trueClassName?: string;
}
export interface JsonFormatterProps {
    /**
     * The JSON data to be formatted.
     */
    json: string;
    /**
     * Optional class names for different elements of the JSON formatter.
     */
    jsonClassName?: JsonClassName;
    /**
     * Optional inline styles for different elements of the JSON formatter.
     */
    jsonStyle?: JsonStyle;
    /**
     * The width of the tab space. Default is 2.
     */
    tabWith?: number;
}
/**
 * A React component that formats and displays JSON data in a styled manner.
 */
export default function JsonFormatter({ json, jsonClassName: { booleanClassName, braceClassName, bracketClassName, className, commaClassName, falseClassName, nullClassName, numberClassName, propertyClassName, stringClassName, tabSpaceClassName, trueClassName }, jsonStyle: { booleanStyle, braceStyle, bracketStyle, commaStyle, falseStyle, nullStyle, numberStyle, propertyStyle, stringStyle, style, tabSpaceStyle, trueStyle }, tabWith }: JsonFormatterProps): JSX.Element;
export {};
