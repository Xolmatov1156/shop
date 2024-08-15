import { Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { Bars } from 'react-loader-spinner'


function Main() {
    const Users = lazy(
        () =>
            new Promise((resolve) => {
                return setTimeout(() => resolve(import("../pages/Users")), 1500);
            }))
            const Products = lazy(
                () =>
                    new Promise((resolve) => {
                        return setTimeout(() => resolve(import("../pages/Products")), 1500);
                    }))
                    const About = lazy(
                        () =>
                            new Promise((resolve) => {
                                return setTimeout(() => resolve(import("../pages/About")), 1500);
                            }))
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense
                            fallback={
                                <div className="fixed top-0 left-0 w-full h-full flex items-center bg-violet-900 justify-center">
                                    (
                                    <Bars
                                        height="100"
                                        width="100"
                                        color="white"
                                        ariaLabel="bars-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        visible={true}
                                    />
                                    )
                                </div>
                            }
                        >
                            <Users/>
                        </Suspense>
                    }
                />
                <Route
                    path="/products"
                    element={
                        <Suspense
                            fallback={
                                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-violet-900">
                                    (
                                    <Bars
                                        height="80"
                                        width="80"
                                        color="white"
                                        ariaLabel="bars-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        visible={true}
                                    />
                                    )
                                </div>
                            }
                        >
                            <Products/>
                        </Suspense>
                    }
                />
                <Route
                    path="/about/:id"
                    element={
                        <Suspense
                            fallback={
                                <div className="fixed top-0 left-0 w-full h-full flex items-center bg-violet-900 justify-center">
                                    (
                                    <Bars
                                        height="80"
                                        width="80"
                                        color="white"
                                        ariaLabel="bars-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        visible={true}
                                    />
                                    )
                                </div>
                            }
                        >
                            <About/>
                        </Suspense>
                    }
                />
            </Routes>
        </>
    );
}

export default Main;
