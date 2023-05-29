import { useSelector, useDispatch } from "react-redux";
import { getMakes } from "../store/carReducer";
import { useEffect, useState } from "react";
import { Model } from "../components/Main/Model";
import { Loader } from "../components/Loader";

export const Search = () => {
    const dispatch = useDispatch();
    const models = useSelector((state) => state.makes);
    const [search, setSearch] = useState('');
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            search && dispatch(getMakes({model: search}));
        }, 500);
        return () => clearTimeout(delayDebounceFn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])
    return (
        <>
            <div class="input-group mb-3">
                <input 
                    type="search" 
                    class="form-control" 
                    placeholder="Search by models(camry)" 
                    aria-label="Search by models" 
                    aria-describedby="basic-addon2" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" onClick={() => setSearch('')}>Clear</button>
                </div>
            </div>
            {models.status !== 'loading' && models.value.map((model, index) => (
                    <Model key={index} model={model} />
            ))}
            {models.status === 'loading' && <Loader />}
            {models.status !== 'loading' && models.value.length < 1 && (
                <div>
                    No results yet
                </div>
            )}
        </>
    )
}