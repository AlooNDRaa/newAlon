/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useCopyToClipboard } from "usehooks-ts";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
 
export default function ClipboardCopyButton() {
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = React.useState(false);
 
  return (
    <button
      onMouseLeave={() => setCopied(false)}
      onClick={() => {
        copy("alonngadea@gmail.com");
        setCopied(true);
      }}
      className="flex items-center gap-x-3 px-4 py-2.5 lowercase bg-gray-800 text-white rounded-lg mt-3 hover:bg-gray-900"
    >
      <h3
        className="border-r border-gray-400/50 pr-3 font-normal"
      >
        alonngadea@gmail.com
      </h3>
      {copied ? (
        <CheckIcon className="h-4 w-4 text-white" />
      ) : (
        <DocumentDuplicateIcon className="h-4 w-4 text-white" />
      )}
    </button>
  );
}