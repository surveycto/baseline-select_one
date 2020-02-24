# Baseline select_one field

![Default appearance for the 'baseline-select_one' field plug-in](extras/preview.jpg)

| likert | minimal | quick |
| --- | --- | --- |
| <img src="extras/preview-likert.jpg" alt="likert appearance" title="likert appearance" width="100px"/> | <img src="extras/preview-minimal.jpg" alt="minimal appearance" title="minimal appearance" width="100px"/> | <img src="extras/preview-quick.jpg" alt="quick appearance" title="quick appearance" width="100px"/> |


## Description

A simple replacement for the default select_one field. Use this as a starting template when creating your own select_one field plug-in.

## Default SurveyCTO feature support

| Feature / Property | Support |
| --- | --- |
| Supported field type(s) | `select_one`|
| Default values | Yes |
| Custom constraint message | Yes |
| Custom required message | Yes |
| Read only | Yes |
| media:image | Yes |
| media:audio | Yes |
| media:video | Yes |
| `quick` appearance | Yes |
| `minimal` appearance | Yes |
| `compact` appearance | No |
| `compact-#` appearance | No |
| `quickcompact` appearance | No |
| `quickcompact-#` appearance | No |
| `likert` appearance | Yes |
| `likert-min` appearance | Yes* |
| `likert-mid` appearance | No |

**Note: this plug-in works well for the likert-min appearance when the field label is short, and does not contain an image, audio, or video. This is a known limitation currently.

## How to use

**To use this plug-in as-is**, just download the [baseline-select_one.fieldplugin.zip](baseline-select_one.fieldplugin.zip) file from this repo, and attach it to your form.

To create your own field plug-in using this as a template, follow these steps:

1. Fork this repo
1. Make changes to the files in the `source` directory.

    * **Note:** be sure to update the `manifest.json` file as well.

1. Zip the updated contents of the `source` directory.
1. Rename the .zip file to *yourpluginname*.fieldplugin.zip (replace *yourpluginname* with the name you want to use for your plug-in).
1. You may then attach your new .fieldplugin.zip file to your form as normal.

## More resources
More instructions for developing and using field plug-ins can be found here: [https://github.com/surveycto/field-plug-in-resources](https://github.com/surveycto/field-plug-in-resources)