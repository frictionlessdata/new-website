(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{215:function(e,a,t){"use strict";t.r(a);var r=t(0),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"data-resource"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-resource"}},[e._v("#")]),e._v(" Data Resource")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Author(s): Paul Walsh, Rufus Pollock\nJSON Schema (for spec): /schemas/data-resource.json \nVersion: 1.0-rc.2\n")])])]),t("h3",{attrs:{id:"language"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#language"}},[e._v("#")]),e._v(" Language")]),e._v(" "),t("p",[e._v("The key words "),t("code",[e._v("MUST")]),e._v(", "),t("code",[e._v("MUST NOT")]),e._v(", "),t("code",[e._v("REQUIRED")]),e._v(", "),t("code",[e._v("SHALL")]),e._v(", "),t("code",[e._v("SHALL NOT")]),e._v(", "),t("code",[e._v("SHOULD")]),e._v(", "),t("code",[e._v("SHOULD NOT")]),e._v(", "),t("code",[e._v("RECOMMENDED")]),e._v(", "),t("code",[e._v("MAY")]),e._v(", and "),t("code",[e._v("OPTIONAL")]),e._v(" in this document are to be interpreted as described in "),t("a",{attrs:{href:"https://www.ietf.org/rfc/rfc2119.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 2119"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("The "),t("strong",[e._v("Data Resource")]),e._v(" format describes a data resource such as an individual file or table.")]),e._v(" "),t("p",[e._v("The essence of a Data Resource is a locator for the data it describes.")]),e._v(" "),t("p",[e._v("A range of other properties can be declared to provide a richer set of metadata.")]),e._v(" "),t("h3",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("p",[e._v("A minimal Data Resource looks as follows:")]),e._v(" "),t("p",[e._v("With data accessible via the local filesystem.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "path": "resource-path.csv"\n}\n')])])]),t("p",[e._v("With data accessible via http.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "path": "http://example.com/resource-path.csv"\n}\n')])])]),t("p",[e._v("A minimal Data Resource pointing to some inline data looks as follows.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "data": {\n    "resource-name-data": [\n      {"a": 1, "b": 2}\n    ]\n  },\n}\n')])])]),t("p",[e._v("A comprehensive Data Resource example with all required, recommended and optional properties looks as follows.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "name": "solar-system",\n  "path": "http://example.com/solar-system.csv",\n  "title": "The Solar System",\n  "description": "My favourite data about the solar system.",\n  "format": "csv",\n  "mediatype": "text/csv",\n  "encoding": "utf-8",\n  "bytes": 1,\n  "hash": "",\n  "schema": "",\n  "sources": "",\n  "licenses": ""\n}\n')])])]),t("h2",{attrs:{id:"descriptor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#descriptor"}},[e._v("#")]),e._v(" Descriptor")]),e._v(" "),t("p",[e._v("A Data Resource descriptor MUST be a valid JSON "),t("code",[e._v("object")]),e._v(". (JSON is defined in "),t("a",{attrs:{href:"https://www.ietf.org/rfc/rfc4627.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 4627"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("p",[e._v("Key properties of the descriptor are described below. A descriptor MAY include any number of properties in additional to those described below as required and optional properties.")]),e._v(" "),t("h2",{attrs:{id:"data-location"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-location"}},[e._v("#")]),e._v(" Data Location")]),e._v(" "),t("p",[e._v("A resource MUST contain a property describing the location of the data associated to the resource. The location of resource data MUST be specified by the presence of one (and only one) of these two properties:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("path")]),e._v(": for data in files located online or locally on disk.")]),e._v(" "),t("li",[t("code",[e._v("data")]),e._v(": for data inline in the descriptor itself.")])]),e._v(" "),t("h3",{attrs:{id:"path-data-in-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#path-data-in-files"}},[e._v("#")]),e._v(" "),t("code",[e._v("path")]),e._v(" Data in Files")]),e._v(" "),t("p",[t("code",[e._v("path")]),e._v(" MUST be a string -- or an array of strings (see "),t("a",{attrs:{href:"www.dataresourcedatainmultiplefiles.com"}},[e._v('"Data in Multiple Files"')]),e._v('). Each string MUST be a "url-or-path" as defined in the next section.')]),e._v(" "),t("h3",{attrs:{id:"url-or-path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#url-or-path"}},[e._v("#")]),e._v(" URL or Path")]),e._v(" "),t("p",[e._v('A "url-or-path" is a '),t("code",[e._v("string")]),e._v(" with the following additional constraints:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("MUST")]),e._v(" either be a URL or a POSIX path")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://en.wikipedia.org/wiki/URL",target:"_blank",rel:"noopener noreferrer"}},[e._v("URLs"),t("OutboundLink")],1),e._v(" MUST be fully qualified. MUST be using either http or https scheme. (Absence of a scheme indicates "),t("code",[e._v("MUST")]),e._v(" be a POSIX path)")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Path_%28computing%29#POSIX_pathname_definition",target:"_blank",rel:"noopener noreferrer"}},[e._v("POSIX paths"),t("OutboundLink")],1),e._v(" (unix-style with "),t("code",[e._v("/")]),e._v(" as separator) are supported for referencing local files, with the security restraint that they "),t("code",[e._v("MUST")]),e._v(" be relative siblings or children of the descriptor. Absolute paths (/) and relative parent paths (../) MUST NOT be used, and implementations SHOULD NOT support these path types.")])]),e._v(" "),t("p",[e._v("Examples:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('# fully qualified url\n"path": "http://ex.datapackages.org/big-csv/my-big.csv"\n\n# relative path\n# note: this will work both as a relative path on disk and on online\n"path": "my-data-directory/my-csv.csv"\n')])])]),t("aside",{staticClass:"notice"},[e._v("\nYou must replace meowmeowmeow with your personal API key.\n")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("SECURITY: "),t("code",[e._v("/")]),e._v(" (absolute path) and "),t("code",[e._v("../")]),e._v(" (relative parent path) are forbidden to avoid security vulnerabilities when implementing data package software. These limitations on resource "),t("code",[e._v("path")]),e._v(" ensure that resource paths only point to files within the data package directory and its subdirectories. This prevents data package software being exploited by a malicious user to gain unintended access to sensitive information.")])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("For example, suppose a data package hosting service stores packages on disk and allows access via an API. A malicious user uploads a data package with a resource path like "),t("code",[e._v("/etc/passwd")]),e._v(". The user then requests the data for that resource and the server naively opens "),t("code",[e._v("/etc/passwd")]),e._v(" and returns that data to the caller.")])]),e._v(" "),t("p",[e._v(":::notice\nIMPLEMENTOR: prior to release 1.0.0-beta.18 (Nov 17 2016) there was a "),t("code",[e._v("url")]),e._v(" property distinct from "),t("code",[e._v("path")]),e._v(". In order to support backwards compatibility, implementors MAY want to automatically convert a "),t("code",[e._v("url")]),e._v(" property to a "),t("code",[e._v("path")]),e._v(" property and issue a warning.\n:::")]),e._v(" "),t("h3",{attrs:{id:"data-in-multiple-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-in-multiple-files"}},[e._v("#")]),e._v(" Data in Multiple Files")]),e._v(" "),t("p",[e._v("Usually, a resource will have only a single file associated to it. However, sometimes it may be convenient to have a single resource whose data is split across multiple files -- perhaps the data is large and having it in one file would be inconvenient.")]),e._v(" "),t("p",[e._v("To support this use case the "),t("code",[e._v("path")]),e._v(" property MAY be an array of strings rather than a single string:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"path": [ "myfile1.csv", "myfile2.csv" ]\n')])])]),t("p",[e._v("It is NOT permitted to mix fully qualified URLs and relative paths in a "),t("code",[e._v("path")]),e._v(" array: strings MUST either all be relative paths or all URLs.")]),e._v(" "),t("p",[e._v(":::notice\nNOTE: all files in the array MUST be similar in terms of structure, format etc. Implementors MUST be able to concatenate together the files in the simplest way and treat the result as one large file. For tabular data there is the issue of header rows. See the "),t("a",{attrs:{href:"www.tabulardatapackage.com"}},[e._v("Tabular Data Package spec")]),e._v(" for more on this.\n:::")]),e._v(" "),t("h3",{attrs:{id:"data-inline-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-inline-data"}},[e._v("#")]),e._v(" "),t("code",[e._v("data")]),e._v(" Inline Data")]),e._v(" "),t("p",[e._v("Resource data rather than being stored in external files can be shipped 'inline' on a Resource using the "),t("code",[e._v("data")]),e._v(" property.")]),e._v(" "),t("p",[e._v("The value of the data property can be any type of data. However, restrictions of JSON require that the value be a string so for binary data you will need to encode (e.g. to Base64). Information on the type and encoding of the value of the data property SHOULD be provided by the format (or mediatype) property and the encoding property.")]),e._v(" "),t("p",[e._v("Specifically: the value of the data property MUST be:")]),e._v(" "),t("ul",[t("li",[e._v("EITHER: a JSON array or object - the data is then assumed to be JSON data and SHOULD be processed as such")]),e._v(" "),t("li",[e._v("OR: a JSON string - in this case the format or mediatype properties MUST be provided.")])]),e._v(" "),t("p",[e._v("Thus, a consumer of resource object MAY assume if no format or mediatype property is provided that the data is JSON and attempt to process it as such.")]),e._v(" "),t("p",[e._v("Examples 1 - inline JSON:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n   ...\n   "resources": [\n     {\n        "format": "json",\n        # some json data e.g.\n        "data": [\n           { "a": 1, "b": 2 },\n           { .... }\n        ]\n     }\n   ]\n}\n')])])]),t("p",[e._v("Example 2 - inline CSV:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n   ...\n   "resources": [\n     {\n        "format": "csv",\n        "data": "A,B,C\\n1,2,3\\n4,5,6"\n     }\n   ]\n}\n')])])]),t("h2",{attrs:{id:"metadata-properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#metadata-properties"}},[e._v("#")]),e._v(" Metadata Properties")]),e._v(" "),t("h3",{attrs:{id:"required-properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#required-properties"}},[e._v("#")]),e._v(" Required Properties")]),e._v(" "),t("p",[e._v("A descriptor MUST contain the following properties:")]),e._v(" "),t("h3",{attrs:{id:"name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[e._v("#")]),e._v(" "),t("code",[e._v("name")])]),e._v(" "),t("p",[e._v("A resource MUST contain a "),t("code",[e._v("name")]),e._v(" property. The name is a simple name or identifier to be used for this resource.")]),e._v(" "),t("ul",[t("li",[e._v("If present, the name MUST be unique amongst all resources in this data package.")]),e._v(" "),t("li",[e._v('It MUST consist only of lowercase alphanumeric characters plus ".", "-" and "_".')]),e._v(" "),t("li",[e._v("It would be usual for the name to correspond to the file name (minus the extension) of the data file the resource describes.")])]),e._v(" "),t("h3",{attrs:{id:"recommended-properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recommended-properties"}},[e._v("#")]),e._v(" Recommended Properties")]),e._v(" "),t("h3",{attrs:{id:"profile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#profile"}},[e._v("#")]),e._v(" "),t("code",[e._v("profile")])]),e._v(" "),t("p",[e._v("A string identifying the "),t("code",[e._v("profile")]),e._v(" of this descriptor as per the "),t("a",{attrs:{href:"www.profiles.com"}},[e._v("profiles")]),e._v(" specification.")]),e._v(" "),t("p",[e._v("Examples:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "profile": "tabular-data-resource"\n}\n')])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "profile": "http://example.com/my-profiles-json-schema.json"\n}\n')])])]),t("h3",{attrs:{id:"optional-properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optional-properties"}},[e._v("#")]),e._v(" Optional Properties")]),e._v(" "),t("p",[e._v("A descriptor MAY contain any number of additional properties. Common properties include:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("title")]),e._v(": a title or label for the resource.")]),e._v(" "),t("li",[t("code",[e._v("description")]),e._v(": a description of the resource.")]),e._v(" "),t("li",[t("code",[e._v("format")]),e._v(": 'csv', 'xls', 'json' etc. Would be expected to be the standard file extension for this type of resource.")]),e._v(" "),t("li",[t("code",[e._v("mediatype")]),e._v(": the mediatype/mimetype of the resource e.g. 'text/csv', 'application/vnd.ms-excel'")]),e._v(" "),t("li",[t("code",[e._v("mediatype")]),e._v(': the mediatype/mimetype of the resource e.g. "text/csv", or "application/vnd.ms-excel". Mediatypes are maintained by the Internet Assigned Numbers Authority (IANA) in a '),t("a",{attrs:{href:"https://www.iana.org/assignments/media-types/media-types.xhtml",target:"_blank",rel:"noopener noreferrer"}},[e._v("media type registry"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("encoding")]),e._v(': specify the character encoding of the resource\'s data file. The values should be one of the "Preferred MIME Names" for '),t("a",{attrs:{href:"https://www.iana.org/assignments/character-sets/character-sets.xhtml",target:"_blank",rel:"noopener noreferrer"}},[e._v("a character encoding registered with IANA"),t("OutboundLink")],1),e._v(". If no value for this key is specified then the default is UTF-8.")]),e._v(" "),t("li",[t("code",[e._v("bytes")]),e._v(": size of the file in bytes.")]),e._v(" "),t("li",[t("code",[e._v("hash")]),e._v(": the MD5 hash for this resource. Other algorithms can be indicated by prefixing the hash's value with the algorithm name in lower-case. For example:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"hash": "sha1:8843d7f92416211de9ebb963ff4ce28125932878"\n')])])]),t("ul",[t("li",[t("code",[e._v("sources")]),e._v(": as for "),t("a",{attrs:{href:"www.datapackage.com"}},[e._v("Data Package metadata")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("licenses")]),e._v(": as for "),t("a",{attrs:{href:"www.datapackage.com"}},[e._v("Data Package metadata")]),e._v(". If not specified the resource inherits from the data package.")])]),e._v(" "),t("h2",{attrs:{id:"resource-schemas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resource-schemas"}},[e._v("#")]),e._v(" Resource Schemas")]),e._v(" "),t("p",[e._v("A Data Resource MAY have a "),t("code",[e._v("schema")]),e._v(" property to describe the schema of the resource data.")]),e._v(" "),t("p",[e._v("The value for the "),t("code",[e._v("schema")]),e._v(" property on a "),t("code",[e._v("resource")]),e._v(" MUST be an "),t("code",[e._v("object")]),e._v(" representing the schema OR a "),t("code",[e._v("string")]),e._v(" that identifies the location of the schema.")]),e._v(" "),t("p",[e._v("If a "),t("code",[e._v("string")]),e._v(" it must be a "),t("a",{attrs:{href:"www.urlorpath.com"}},[e._v("url-or-path")]),e._v(" as defined above, that is a fully qualified http URL or a relative POSIX path. The file at the location specified by this url-or-path string "),t("code",[e._v("MUST")]),e._v(" be a JSON document containing the schema.")]),e._v(" "),t("p",[e._v(":::info\nNOTE: the Data Package specification places no restrictions on the form of the schema Object. This flexibility enables specific communities to define schemas appropriate for the data they manage. As an example, the "),t("a",{attrs:{href:"www.tabulardatapackage.com"}},[e._v("Tabular Data Package")]),e._v(" specification requires the schema to conform to "),t("a",{attrs:{href:"www.tableschema.com"}},[e._v("Table Schema")]),e._v(".\n:::")]),e._v(" "),t("h3",{attrs:{id:"changelog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),t("p",[e._v("See the "),t("a",{attrs:{href:"https://frictionlessdata.io/specs/changelog/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Changelog"),t("OutboundLink")],1),e._v(" for information.")]),e._v(" "),t("h3",{attrs:{id:"implementations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementations"}},[e._v("#")]),e._v(" Implementations")]),e._v(" "),t("p",[e._v("The following implementations are available for data-package:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-py",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-js",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("See the "),t("a",{attrs:{href:"www.specsimplementation.com"}},[e._v("implementation")]),e._v(" page for further information on writing an implementation of a Frictionless Data specification.")])])}),[],!1,null,null,null);a.default=s.exports}}]);