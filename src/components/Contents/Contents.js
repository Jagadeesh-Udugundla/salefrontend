import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CircularProgress from "@mui/material/CircularProgress";
import "./Contents.css"

const Contents = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/getdata');
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='maincontainer'>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
                <p style={{fontSize:"20px",fontWeight:"1px",color:"#E5DFD9",fontFamily:"comme"}}>TANN TRIM</p>
            </div>
            <div style={{display:"flex",justifyContent:"space-evenly",padding:"20px",alignItems:"center"}}>
                <SearchIcon className='headicon' />
                <PermIdentityIcon className='headicon'/>
                <BookmarkBorderIcon className='headicon'/>
                <LocalMallIcon className='headicon'/>
            </div>
        </div>
        <div style={{display:'flex',width:"50%",marginLeft:"25%",paddingTop:"30px",justifyContent:"space-evenly",alignItems:"center"}}>
            <div style={{cursor:"pointer"}}>
                Bags
            </div>
            <div style={{cursor:"pointer"}}>
                Travel
            </div>
            <div style={{cursor:"pointer"}}>
                Accesories
            </div>
            <div style={{cursor:"pointer"}}>
                Gifting
            </div>
            <div style={{cursor:"pointer"}}>
                Jewelery
            </div>
        </div>
        <div className="allproduct">
            <div className="" style={{textAlign:"center",width:"140px"}}>
                {/* <BusinessCenterIcon style={{height:"80px",width:"80px"}}/> */}
                <svg xmlns="http://www.w3.org/2000/svg" style={{height:"80px",width:"80px"}} width="16" height="16" fill="currentColor" className="bi bi-luggage-fill" viewBox="0 0 16 16">
  <path d="M2 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V5h.5A1.5 1.5 0 0 1 8 6.5V7H7v-.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H4v1H2.5v.25a.75.75 0 0 1-1.5 0v-.335A1.5 1.5 0 0 1 0 13.5v-7A1.5 1.5 0 0 1 1.5 5H2zM3 5h2V2H3z"/>
  <path d="M2.5 7a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5m10 1v-.5A1.5 1.5 0 0 0 11 6h-1a1.5 1.5 0 0 0-1.5 1.5V8H8v8h5V8zM10 7h1a.5.5 0 0 1 .5.5V8h-2v-.5A.5.5 0 0 1 10 7M5 9.5A1.5 1.5 0 0 1 6.5 8H7v8h-.5A1.5 1.5 0 0 1 5 14.5zm9 6.5V8h.5A1.5 1.5 0 0 1 16 9.5v5a1.5 1.5 0 0 1-1.5 1.5z"/>
</svg>
                <p>All Bags</p>
            </div>
            <div className="" style={{textAlign:"center",width:"140px"}}>
                <BusinessCenterIcon style={{height:"80px",width:"80px"}}/>
                <p>Vanity Pouch</p>
            </div>
            <div className="" style={{textAlign:"center",width:"140px"}}>
                {/* <BusinessCenterIcon style={{height:"80px",width:"80px"}}/> */}
                <svg xmlns="http://www.w3.org/2000/svg" style={{height:"80px",width:"80px"}} width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg>
                <p>Tote Bag</p>
            </div>
            <div className="" style={{textAlign:"center",width:"140px"}}>
                {/* <BusinessCenterIcon style={{height:"80px",width:"80px"}}/> */}
                <svg xmlns="http://www.w3.org/2000/svg" style={{height:"80px",width:"80px"}} width="16" height="16" fill="currentColor" className="bi bi-duffle" viewBox="0 0 16 16">
  <path d="M8 5.75c1.388 0 2.673.193 3.609.385a18 18 0 0 1 1.43.354l.112.034.002.001h.001a.5.5 0 0 1-.308.952l-.004-.002-.018-.005a17 17 0 0 0-1.417-.354A17.3 17.3 0 0 0 8 6.75a17.3 17.3 0 0 0-3.408.365 17 17 0 0 0-1.416.354l-.018.005-.003.001a.5.5 0 1 1-.308-.95A17.3 17.3 0 0 1 8 5.75"/>
  <path d="M5.229 2.722c-.126.461-.19.945-.222 1.375-1.401.194-2.65.531-3.525 1.012C-.644 6.278.036 11.204.393 13.127a.954.954 0 0 0 .95.772h13.314a.954.954 0 0 0 .95-.772c.357-1.923 1.037-6.85-1.09-8.018-.873-.48-2.123-.818-3.524-1.012a7.4 7.4 0 0 0-.222-1.375c-.162-.593-.445-1.228-.971-1.622-1.115-.836-2.485-.836-3.6 0-.526.394-.81 1.03-.971 1.622M9.2 1.9c.26.195.466.57.606 1.085.088.322.142.667.173.998a23.3 23.3 0 0 0-3.958 0 6 6 0 0 1 .173-.998c.14-.515.346-.89.606-1.085.76-.57 1.64-.57 2.4 0M8 4.9c2.475 0 4.793.402 6.036 1.085.238.13.472.406.655.93.183.522.28 1.195.303 1.952.047 1.486-.189 3.088-.362 4.032H1.368c-.173-.944-.409-2.545-.362-4.032.024-.757.12-1.43.303-1.952.183-.524.417-.8.655-.93C3.207 5.302 5.525 4.9 8 4.9"/>
</svg>
                <p>Duffle Bag</p>
            </div>
            <div className="" style={{textAlign:"center",width:"140px"}}>
                {/* <BusinessCenterIcon style={{height:"80px",width:"80px"}}/> */}
                <svg xmlns="http://www.w3.org/2000/svg" style={{height:"80px",width:"80px"}} width="16" height="16" fill="currentColor" className="bi bi-suitcase-lg-fill" viewBox="0 0 16 16">
  <path d="M7 0a2 2 0 0 0-2 2H1.5A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14H2a.5.5 0 0 0 1 0h10a.5.5 0 0 0 1 0h.5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2H11a2 2 0 0 0-2-2zM6 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zM3 13V3h1v10zm9 0V3h1v10z"/>
</svg>
                <p>Laptop Sleeve</p>
            </div>
            <div className="" style={{textAlign:"center",width:"140px"}}>
                <BusinessCenterIcon style={{height:"80px",width:"80px"}}/>
                <p>Messanger Bag</p>
            </div>
            <div className="" style={{textAlign:"center",width:"140px"}}>
                <BusinessCenterIcon style={{height:"80px",width:"80px"}}/>
                <p>Slings Bags</p>
            </div>
            <div className="" style={{textAlign:"center",width:"140px"}}>
                {/* <BusinessCenterIcon style={{height:"80px",width:"80px"}}/> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{height:"80px",width:"80px"}} fill="currentColor" className="bi bi-handbag" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2m3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6z"/>
                </svg>
                <p>Hand Bags</p>
            </div>
            <div className="" style={{textAlign:"center",width:"140px"}}>
                {/* <BusinessCenterIcon style={{height:"80px",width:"80px"}}/> */}
                <svg xmlns="http://www.w3.org/2000/svg" style={{height:"80px",width:"80px"}} width="16" height="16" fill="currentColor" className="bi bi-bucket-fill" viewBox="0 0 16 16">
                    <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5m1.005 0a4.5 4.5 0 0 1 8.945 0z"/>
                </svg>
                <p>Bucket Bag</p>
            </div>
            <div className="" style={{textAlign:"center",width:"140px"}}>
                {/* <BusinessCenterIcon style={{height:"80px",width:"80px"}}/> */}
                <svg xmlns="http://www.w3.org/2000/svg" style={{height:"80px",width:"80px"}} width="16" height="16" fill="currentColor" className="bi bi-suitcase-lg-fill" viewBox="0 0 16 16">
  <path d="M7 0a2 2 0 0 0-2 2H1.5A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14H2a.5.5 0 0 0 1 0h10a.5.5 0 0 0 1 0h.5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2H11a2 2 0 0 0-2-2zM6 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zM3 13V3h1v10zm9 0V3h1v10z"/>
</svg>
                <p>Remaining</p>
            </div>
        </div>
        <div style={{display:'flex',justifyContent:"space-between",alignItems:'center',margin:"0px 30px 0px 20px"}}>
            <div>
                <h3>Bags <i className="bi bi-dot"></i> Backpacks</h3>
            </div>
            <div style={{display:"flex"}}>
                {/* <h3>13 Products</h3> */}
                13 Products
                <i className="bi bi-upload" style={{paddingLeft:"10px"}}></i>
            </div>
        </div>
        {!isLoading &&(
        <div>
        {isLoading && (
        <div className="loading-container">
          <CircularProgress color="warning"/>
        </div>
      )}
      <div className='datacont'>
        {products.map(product => (
          <div key={product._id} className="product">
            <div style={{ position: 'relative' }}>
        <img src={product.image} alt={product.name} className='imagestyle' />
        <BookmarkBorderIcon style={{ position: 'absolute',cursor:"pointer", top: 10, right: 10,color:"#141414"}} />
      </div>
            {/* <img src={product.image} alt={product.name} className='imagestyle' /> */}
            <p>{product.name}</p>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingLeft:"20px"}}>
                <div style={{paddingBottom:"30px"}}>
                    <span style={{fontSize:"25px"}}>₹{product.price - (product.price * (product.discount / 100))}</span>
                    <span style={{ textDecoration: 'line-through',fontSize:"16px", marginRight: '5px' }}>₹{product.price}</span>
                    <span style={{color:"green"}}>({product.discount}%)</span>
                </div>
                <div style={{paddingRight:"10px",paddingBottom:"30px",cursor:"pointer"}}>
                    <LocalMallIcon/>
                </div>
            </div>
          </div>
        ))}
        </div>
        </div>)}
    </div>
  )
}

export default Contents