/* eslint-disable */

import { useEffect, useState } from "react";
import LocationHandler from "../services/location";

const useLocation = () => {
  const [state, setState] = useState({ "loading":true, data: {} });

  useEffect(() => {
    const getLocation = async () => {
      const {coords: data} = await LocationHandler.getLocation()
      
      setState({ 
        loading: false, 
        data: {
          latitude: data.latitude, 
          longitude: data.longitude 
        }
      })
    }

    getLocation();
  }, []);

  return [state]
}

export default useLocation;