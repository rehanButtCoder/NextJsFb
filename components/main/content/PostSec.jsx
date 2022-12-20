import { collection, getDocs, query, where } from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";
import { db } from "../../firebasemain/Firebase";

const PostSec = () => {

    const [data, setData] = useState([])
    const [loder, setLoder] = useState(true)

    const getFunc = async () => {
        const q = query(collection(db, "posts"));

        const querySnapshot = await getDocs(q);
        const dataList = querySnapshot.docs.map((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // setData(doc.data())
            return doc.data()
        });
        let dataArray = dataList?.map((item) => {
            return {
                message: item?.message,
                imageUrl: item?.imageUrl,
                timeStamp: item?.timeStamp,
            }
        })
        setData(dataArray);
        setLoder(false)
    }

    useEffect(() => {
        getFunc()
    }, [db])

    // console.log(data);

    return (
        <div>
            {loder ? <p className="text-center">Loading...</p> :
                data?.map((item) => {
                    return (
                        <>
                            <div className="fbBox">
                                <div className="flex">
                                    <Image src="/images/fb.png" width={40} height={40} alt="" />
                                    <div className="pl-1">
                                        <h3 className="text-sm font-semibold">Rehan Butt</h3>
                                        <p className="text-xs">
                                            {new Date(item?.timeStamp.toDate()).toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-base	mt-3 mb-2">{item?.message}</p>
                                <img src={item?.imageUrl} alt="" />
                                {/* <Image width={1000} height={1000} alt="" style={{ width: '100%', height: 'auto', objectFit: "cover" }} /> */}

                            </div>

                        </>
                    )
                })}

        </div>
    );
}

export default PostSec;