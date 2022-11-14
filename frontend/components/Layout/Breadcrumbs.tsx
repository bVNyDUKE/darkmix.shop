import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React from "react";

export default function Breadcrumbs({ links }: { links: Array<string> }) {
  function capitalize(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  return (
    <div className="mb-4 flex gap-5 items-center font-semibold">
      <Link href="/" className="text-gray-400">
        Home
      </Link>
      <FontAwesomeIcon icon={faAngleRight} className="text-gray-400" />
      {links.map((link, i) => (
        <React.Fragment key={i}>
          {capitalize(link)}
          {i == links.length - 1 ? (
            ""
          ) : (
            <FontAwesomeIcon icon={faAngleRight} className="text-gray-400" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
