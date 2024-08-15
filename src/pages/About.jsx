import React, { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '../Hook/useFetch';
import Back from '../assets/images/back.svg';
import { gsap } from 'gsap';

function About() {
    const { id } = useParams();
    const { data } = useFetch(`https://fakestoreapi.com/products/${id}`);
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);
    document.title = "About";

    useEffect(() => {
        gsap.from(containerRef.current, { opacity: 0, duration: 1 });
        gsap.from(imageRef.current, { x: -100, opacity: 0, duration: 1,  });
        gsap.from(textRef.current, { x: 100, opacity: 0, duration: 1, });
    }, []);

    return (
        <div className='w-full h-[90vh] flex justify-center items-center '>
            <div ref={containerRef} className='w-[800px] h-[500px] rounded-lg border-[1px] border-black relative flex justify-center items-center px-[20px] space-x-[15px]'>
                <button onClick={() => navigate(-1)} className='absolute left-[10px] top-[10px]'>
                    <img src={Back} alt="back" />
                </button>
                <img ref={imageRef} src={data.image} alt="product" width={200} height={100} />
                <div ref={textRef}>
                    <h3 className='capitalize text-center mb-[30px] text-[30px]'>{data.category}</h3>
                    <p className='text-center'>{data.description}</p>
                    <p className='text-center mx-auto mt-[20px] border-[1px] border-black w-[100px] rounded-lg'>{data.price}$</p>
                </div>
            </div>
        </div>
    );
}

export default About;
