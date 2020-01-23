# Data Package Identifier

``` 
Author(s): Rufus Pollock
JSON Schema (for spec): /schemas/data-package-identifier.json 
Version: 10-alpha
```

## Language

The key words `MUST`, `MUST NOT`, `REQUIRED`, `SHALL`, `SHALL NOT`, `SHOULD`, `SHOULD NOT`, `RECOMMENDED`, `MAY`, and `OPTIONAL` in this document are to be interpreted as described in [RFC 2119](www.google.com).

Data Package Identifiers are a simple way to identify a Data Package (and its location) using a string or small JSON object.

It exists because of the consistent need across applications to identify a Data Package. For example, in command line tools or libraries one will frequently want to take a Data Package Identifier as an argument.

For example, [DataHub](https://datahub.io/)'s `data-cli` tool has commands like:

```
# gdp is a Data Package identifier
data info gdp

# https://github.com/datasets/gold-prices is a Data Package identifier
data install https://github.com/datasets/gold-prices
```

## Identifier Object Structure

The object structure looks like:

```
{
  // URL to base of the Data Package
  // This URL should *always* have a trailing slash ('/')
  url: ...
  // URL to datapackage.json
  dataPackageJsonUrl: ...
  // name of the Data Package
  name: ...
  // version of the Data Package
  version: ...
  // if parsed from a Identifier String this is the original
  // specString
  original:
}
```

It can be parsed (and less importantly) serialized to a simple string. Spec strings will be frequently used on e.g. the command line to identify a data package.

## Identifier String

An Identifier String is a single string (rather than JSON object) that points to a Data Package. An Identifier String can be, in decreasing order of explicitness:

* A URL that points directly to the `datapackage.json` (no resolution needed):

```
http://mywebsite.com/mydatapackage/datapackage.json
```

* A URL that points directly to the Data Package (that is, the directory containing the `datapackage.json`):

```
http://mywebsite.com/mydatapackage/
```

resolves to:

```
http://mywebsite.com/mydatapackage/datapackage.json
```

* A GitHub URL:

```
http://github.com/datasets/gold-prices
```

resolves to:

```
https://raw.githubusercontent.com/datasets/gold-prices/master/datapackage.json
```

* The `name` of a dataset in the [Core Datasets registry](https://datahub.io/core):

```
gold-prices
```

resolves to:

```
https://datahub.io/core/gold-prices/datapackage.json
```

## Changelog

See the [Changelog](https://frictionlessdata.io/specs/changelog/) for information. 