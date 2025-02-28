import * as yaml from 'js-yaml'

export const action: ActionFunction = async (input: Input) => {
    let matched = input.regexResult!![1]
    let text = input.text

    try {
        if (matched === "[" || matched === "{") {
            let obj = JSON.parse(text)
            popclip.pasteText(JSON.stringify(obj, null, 4))
        } else if (matched.endsWith(":")) {
            let obj = yaml.load(text)
            popclip.pasteText(yaml.dump(obj,
                {
                    indent: 2,
                    lineWidth: -1,
                    noRefs: true
                }
            ))
        }
    } catch (e) {
        popclip.pasteText(text)
    }
}