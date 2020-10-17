import Config from '../utils/config';
import { create } from 'apisauce'

const { BASEURL, APIKEY } = Config;

export async function CommonFetch(body) {
    const api = create({
        baseURL: BASEURL,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        timeout: 15000
    })
    try {
        const getApiCall = await api.get(`/data/2.5/onecall?lat=${body.lat}&lon=${body.long}&exclude=hourly,minutely,alerts&appid=${APIKEY}&units=metric`)
        return getApiCall.data;
    } catch (error) {
    }

}