# Data Resource

``` 
Author(s): Paul Walsh, Rufus Pollock
JSON Schema (for spec): /schemas/data-resource.json 
Version: 1.0-rc.2
```

### Language

The key words `MUST`, `MUST NOT`, `REQUIRED`, `SHALL`, `SHALL NOT`, `SHOULD`, `SHOULD NOT`, `RECOMMENDED`, `MAY`, and `OPTIONAL` in this document are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

## Introduction

The **Data Resource** format describes a data resource such as an individual file or table.

The essence of a Data Resource is a locator for the data it describes.

A range of other properties can be declared to provide a richer set of metadata.

### Examples

A minimal Data Resource looks as follows:

With data accessible via the local filesystem.

```
{
  "path": "resource-path.csv"
}
```

With data accessible via http.

```
{
  "path": "http://example.com/resource-path.csv"
}
```

A minimal Data Resource pointing to some inline data looks as follows.

```
{
  "data": {
    "resource-name-data": [
      {"a": 1, "b": 2}
    ]
  },
}
```

A comprehensive Data Resource example with all required, recommended and optional properties looks as follows.

```
{
  "name": "solar-system",
  "path": "http://example.com/solar-system.csv",
  "title": "The Solar System",
  "description": "My favourite data about the solar system.",
  "format": "csv",
  "mediatype": "text/csv",
  "encoding": "utf-8",
  "bytes": 1,
  "hash": "",
  "schema": "",
  "sources": "",
  "licenses": ""
}
```

## Descriptor

A Data Resource descriptor MUST be a valid JSON `object`. (JSON is defined in [RFC 4627](https://www.ietf.org/rfc/rfc4627.txt)).

Key properties of the descriptor are described below. A descriptor MAY include any number of properties in additional to those described below as required and optional properties.

## Data Location

A resource MUST contain a property describing the location of the data associated to the resource. The location of resource data MUST be specified by the presence of one (and only one) of these two properties:

* `path`: for data in files located online or locally on disk.
* `data`: for data inline in the descriptor itself.

### `path` Data in Files

`path` MUST be a string -- or an array of strings (see ["Data in Multiple Files"](www.dataresourcedatainmultiplefiles.com)). Each string MUST be a "url-or-path" as defined in the next section.

### URL or Path

A "url-or-path" is a `string` with the following additional constraints:

* `MUST` either be a URL or a POSIX path
* [URLs](https://en.wikipedia.org/wiki/URL) MUST be fully qualified. MUST be using either http or https scheme. (Absence of a scheme indicates `MUST` be a POSIX path)
* [POSIX paths](https://en.wikipedia.org/wiki/Path_%28computing%29#POSIX_pathname_definition) (unix-style with `/` as separator) are supported for referencing local files, with the security restraint that they `MUST` be relative siblings or children of the descriptor. Absolute paths (/) and relative parent paths (../) MUST NOT be used, and implementations SHOULD NOT support these path types.

Examples:

```
# fully qualified url
"path": "http://ex.datapackages.org/big-csv/my-big.csv"

# relative path
# note: this will work both as a relative path on disk and on online
"path": "my-data-directory/my-csv.csv"
```

<aside class="notice">
You must replace meowmeowmeow with your personal API key.
</aside>
