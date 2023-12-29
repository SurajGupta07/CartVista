import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { CONSTANTS, EReqMethod } from '../constants/enums';
import { isNetworkConnected } from './network.service';

type HttpServiceType = {
  url: string;
  method: EReqMethod;
  body?: any;
  header?: AxiosRequestHeaders;
};

export const HttpService = async (param: HttpServiceType) => {
  const hasNetwork = await isNetworkConnected();
  if (!hasNetwork) {
    return Promise.resolve({
      resultStatus: {
        status: 'NETWORK ERROR',
        errorMessage: 'Network connection is down',
      },
    });
  }

  const { url, method, body = undefined, header } = param;
  let headers: AxiosRequestHeaders;
  if (header !== undefined) {
    headers = header;
  } else {
    headers = {
      'Content-type': 'application/json',
      'Accept': 'application/json',
    };
  }

  const axiosParams: AxiosRequestConfig = {
    method: method as string,
    url: url,
    data: body,
    headers: headers,
  };
  const resp = await axios(axiosParams).catch(error => {
    console.error(error, url);
    return Promise.reject(CONSTANTS.GENERIC_ERR_MSG);
  });
  if (resp.status >= 500) {
    return Promise.reject(CONSTANTS.GENERIC_ERR_MSG);
  } else if (resp.status >= 404) {
    return Promise.reject(CONSTANTS.SERVER_RESOURCE_NOT_FOUND);
  }

  return resp.data;
};
