/* START: THIS SECTION CODE IS CANNOT BE CHANGED, YOU ONLY READ IT */
export interface FieldSchemaType {
  fieldName?: string;
  type:
    | "string"
    | "number"
    | "boolean"
    | "object"
    | "array"
    | "color"
    | "url"
    | "enum"
    | "datetime"
    | "file"
    | "files";
  required?: boolean;
  label?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  options?: string[];
  fields?: FieldSchemaType[];
  item?: FieldSchemaType;
}
/* END: THIS SECTION CODE IS CANNOT BE CHANGED, YOU ONLY READ IT */

export type ConfigurableSchemas = {
  formSchema: FieldSchemaType[];
};



export const configurableSchemas: ConfigurableSchemas = {
  formSchema: [
    {
      fieldName: "appName",
      type: "string",
      required: true,
      label: "App Name",
    },
    {
      fieldName: "logoUrl",
      type: "url",
      required: true,
      label: "Logo URL",
    },
    {
      fieldName: "brandColor",
      type: "object",
      required: true,
      label: "Brand Color",
      fields: [
        {
          fieldName: "primary",
          type: "color",
          required: true,
          label: "Primary",
        },
        {
          fieldName: "secondary",
          type: "color",
          required: true,
          label: "Secondary",
        },
        {
          fieldName: "accent",
          type: "color",
          required: true,
          label: "Accent",
        },
      ],
    },
    {
      fieldName: "tagline",
      type: "string",
      required: false,
      label: "Tagline",
      maxLength: 120,
    },
    {
      fieldName: "heroHeading",
      type: "string",
      required: false,
      label: "Hero Heading",
      maxLength: 120,
    },
    {
      fieldName: "heroSubheading",
      type: "string",
      required: false,
      label: "Hero Subheading",
      maxLength: 240,
    },
    {
      fieldName: "chatWelcomeMessage",
      type: "string",
      required: false,
      label: "Chat Welcome Message",
      maxLength: 400,
    },
    {
      fieldName: "uploadPlaceholderText",
      type: "string",
      required: false,
      label: "Upload Placeholder Text",
      maxLength: 120,
    },
    {
      fieldName: "chatInputPlaceholder",
      type: "string",
      required: false,
      label: "Chat Input Placeholder",
      maxLength: 120,
    },
    {
      fieldName: "safetyDisclaimerText",
      type: "string",
      required: false,
      label: "Safety Disclaimer Text",
      maxLength: 400,
    },
    {
      fieldName: "dangerColor",
      type: "color",
      required: false,
      label: "Danger Color",
    },
    {
      fieldName: "showSafetyDisclaimer",
      type: "boolean",
      required: false,
      label: "Show Safety Disclaimer",
    },
    {
      fieldName: "footerText",
      type: "string",
      required: false,
      label: "Footer Text",
      maxLength: 200,
    },
  ],
};
