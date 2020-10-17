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
        const getApiCall = await api.get(body)
        return getApiCall.data;
    } catch (error) {
    }
}

// helper function to access the city name from the lat & long

export async function getCityName(body) {
    const api = create({
        baseURL: 'https://api.bigdatacloud.net',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        timeout: 15000
    })
    try {
        const getApiCall = await api.get(body)
        return getApiCall.data;
    } catch (error) {
    }
}

// helper function to get the weekends
export function getWeekends(id) {
    switch (id) {
        case 0:
            return 'Monday';
        case 1:
            return 'Tuesday';
        case 2:
            return 'Wednesday';
        case 3:
            return 'Thursday';
        case 4:
            return 'Friday';
        case 5:
            return 'Saturday';
        case 6:
            return 'Sunday';
        case 7:
            return 'Monday';
        default:
            return ;
    }
}