import axios from "axios";

export const action: ActionFunction = async (input: Input) => {
    let ipAddress = input.text.trim()
    let url = `https://www.ip.cn/api/index?ip=${ipAddress}&type=1`
    try {
        let response = await axios.get(url)
        popclip.showText(response.data.address)
    } catch (e: any) {
        popclip.showText(e.message)
    }
}