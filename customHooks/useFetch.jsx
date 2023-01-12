/* eslint-disable consistent-return */
import { useEffect, useRef } from 'react';
import fetchReducer from '../helpers/fetchReducer';
import reqInstance from '../services/reqInstance';

export default function useFetch(api) {
  const cacheData = useRef({});

  const [state, dispatch] = fetchReducer();

  useEffect(() => {
    let revokeRequest = false;
    if (!api || !api.trim()) return;
    const renderData = async () => {
      dispatch({ type: 'FETCHING' });
      if (cacheData.current[api]) {
        const data = cacheData.current[api];
        dispatch({ type: 'FETCHED', payload: data });
      } else {
        try {
          const res = await reqInstance(api);
          const data = res;
          cacheData.current[api] = data;
          if (revokeRequest) return;
          dispatch({ type: 'FETCHED', payload: data });
        } catch (error) {
          if (revokeRequest) return;
          dispatch({ type: 'FETCH_ERROR', payload: error.message });
        }
      }
    };
    renderData();
    return () => { revokeRequest = true; };
  }, [api]);
  return state;
}
