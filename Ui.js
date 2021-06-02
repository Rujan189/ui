import React, { useState } from "react";
// import React, { useStste } from "React"; 

const Contact = () => {
    const [data, setData] = useState({
        categoryname: " ",
        productname: " ",
        description: " ",
        price: " ", 
        noofitem: " ", 
        featured: " ",
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });

    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`category name is ${data.categoryname}.product name is ${data.productname}.description is ${data.description}. price: ${data.price}`);
    };

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">New UI</h1>
            </div>
            <div className="container customise_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Category Name</label>
                                <input
                                    type="string" 
                                 
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="categoryname"
                                    value={data.categoryname}
                                    onChange={InputEvent}
                                    placeholder="enter category name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">product name</label>
                                <input
                                    type="string"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="productname"
                                    value={data.productname}
                                    onChange={InputEvent}
                                    placeholder="enter product name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">description</label>
                                <input
                                    type="string"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="description"
                                    value={data.description}
                                    onChange={InputEvent}
                                    placeholder="description" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">price</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="price"
                                    value={data.price}
                                    onChange={InputEvent}
                                    placeholder=" " />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">noof item</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="noofitem"
                                    value={data.noofitem}
                                    onChange={InputEvent}
                                    placeholder=" " />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">featured</label>
                                <input
                                    type="bool"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="featured"
                                    value={data.featured}
                                    onChange={InputEvent}
                                    placeholder="featured" />
                            </div>

                            <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label px-2">Images</label>
                            <input 
                            type="file" 
                            id="file" 
                            accept="images/*"
                             />
                        {/* <label for="file">
                        choose a photo
                        </label> */}
                            </div>

                            <div class="col-12 py-2">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;