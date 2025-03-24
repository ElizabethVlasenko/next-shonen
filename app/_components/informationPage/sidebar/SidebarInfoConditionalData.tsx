import React from "react";

type SidebarInfoConditionalDataProps<T> = {
  /**
   * The label to display for the data.
   */
  label: string;
  /**
   * The value to conditionally display.
   */
  value: T | undefined | null;
  /**
   * An optional function to format the value before display.
   */
  format?: (value: T) => string;
  /**
   * An optional fallback value to display if the value is undefined or null. Defaults to "Unknown".
   */
  fallback?: string;
  /**
   * An optional boolean to add a line break after the paragraph element.
   */
  linebreak?: boolean;
  /**
   * An optional class name to apply to the paragraph element.
   */
  paragraphClass?: string;
};

/**
 * A reusable component to conditionally display data with a label. <p><strong>Rating:</strong> {anime.averageScore}/100</p>
 * If the value is undefined or null and no fallback was provided, the component returns null.
 * Optionally, you can provide a format function to transform the value and a fallback value.
 *
 * @param {ConditionalDataProps<T>} props - The component props.
 * @returns {JSX.Element | null} The conditionally rendered paragraph element or null.
 */
export default function SidebarInfoConditionalData<T>({
  label,
  value,
  format,
  fallback,
  linebreak = false,
  paragraphClass,
}: SidebarInfoConditionalDataProps<T>) {
  // no fallback provided and value doesn't exist, return null
  if ((value === undefined && !fallback) || (value === null && !fallback)) {
    return null;
  }

  let formattedValue;
  if (value) formattedValue = format ? format(value) : value;

  //fix to avoid returning default fallback value when no fallback provided and the value is an array/object
  if (!formattedValue && !fallback) return null;

  return (
    <p className={paragraphClass}>
      <strong className="normal-case">{label}:</strong> {linebreak && <br />}
      {formattedValue?.toString() || fallback || "Unknown"}
    </p>
  );
}
