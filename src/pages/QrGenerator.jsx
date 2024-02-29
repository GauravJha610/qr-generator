import React, { useState } from "react";

const QrGenerator = () => {
    const [image_url,setImage_url]= useState("/");
    
    function generateQr(){
        let inputText=document.getElementById('inputText');
        if(inputText.value.length>0){
            let newUrl="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputText.value;
            setImage_url(newUrl);
        }
        else{
            return 0;
        }
    }
    return (
        <div className=" flex flex-col justify-center items-center h-screen ">
            <div className=" bg-white flex flex-col justify-center  border py-4 px-8 rounded-lg max-w-[90%]">
                <p className=" text-[20px] bg-white mt-2 mb-3">Enter text or URL</p>
                <input type="text" placeholder="Text or URL" className=" bg-white text-black placeholder:text-black border border-black h-10 px-3 rounded-md" id="inputText"/>
                {image_url!=="/" && 
                <div className="flex items-center justify-center bg-white pt-8 pb-5">
                    <img src={image_url} alt="" className=" "/>
                </div>
                }

                <button className=" border mt-5 mb-3 h-10 rounded-xl bg-blue-900 text-white" onClick={()=>generateQr()}>Generate QR Code</button>
            </div>
        </div>
    );
};

export default QrGenerator;
