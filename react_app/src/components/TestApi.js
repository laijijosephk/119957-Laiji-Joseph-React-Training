import React, { useEffect, useState } from "react";
import axios from "axios";
export default function TestApi() {
  const [posts, setposts] = useState({ awbno: 4000164309 });

  useEffect(() => {
    axios
      .get(
        `http://timeexpress.dnsalias.com:880/Mobile/TimeServices.svc/TrackDetailsList/${posts.awbno}`
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(posts);
  return (
    <div>
      <h1>Api Demo</h1>
    </div>
  );
}
