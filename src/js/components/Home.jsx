import React from "react";
import { NavBar, Jumbotron, Card, Footer } from '../main.jsx';

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        <Jumbotron />
        <div className="row mt-4">
          <div className="col-md-3">
            <Card 
              title="Surf" 
              text="& tequila!!" 
              image="https://imgs.search.brave.com/8Lr8nsBB6Vgp6k0lQKYJvfxmt7MaQDBaNBJWzN3VNRA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjg5/NzI1NTY2L3Bob3Rv/L3RlcXVpbGEtc2hv/dHMtd2l0aC1zYWx0/LWFuZC1saW1lLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1Y/M1MwWkJNSHBWY0dN/VjBqUTdXMldYR1FM/amtWNDBOajgtallO/dTNua2NzPQ" 
            />
          </div>
          <div className="col-md-3">
            <Card 
              title="Furgoneteo..." 
              text="& TEQUILA!!!" 
              image="https://imgs.search.brave.com/1dmOZqtgBTi_6LqZbTYyu26QjtqH4YaNw7krDk6JCQ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly95ZXNj/YXBhLnR3aWMucGlj/cy9saWJyYXJ5L21l/ZGlhL3BpY3R1cmVz/L2Zyb250ZW5kL3Vz/ZXJzLWFuZC12YW4u/anBnP3R3aWM9djE" 
            />
          </div>
          <div className="col-md-3">
		  <Card 
              title="Un gatete" 
              text="&....TEQUILA!!" 
              image="https://imgs.search.brave.com/PM1__kcgvA7cfoyYXGndv6HtQ1pUfniiAoo6kB-iVb4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmlt/Z2ZsaXAuY29tLzIv/c2U0anguanBn" 
            />
          </div>
          <div className="col-md-3">
            <Card 
              title="Tequila" 
              text="& THE KILLAH!!" 
              image="https://imgs.search.brave.com/zAyvgCHMyVd5ZO494TsR-vYZFSNsQ2SgyFM6bvKGazg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zb21i/cmVyby1tZXhpY2Fu/by1kZWwtcGlzdG9s/ZXJvLWRlbC1iaWdv/dGUtZGVsLXJldiVD/MyVCM2x2ZXItZGVs/LWJhbmRpZG8tMTk1/NzA0OTguanBn" 
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
