const ModelsPage = async () => {
    const res = await fetch("http://localhost:5001/models");
    const models = await res.json();

    // console.log(models);
    return (
        <div className="w-10/12 mx-auto py-10">
            <h2>Models page</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {models.map((model) => (
                    <div key={model.id} className="border p-5 rounded-xl">
                        <h1 className="font-bold text-2xl">{model.title}</h1>
                        <p>{model.description}</p>
                        <p className="font-bold">${model.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ModelsPage;
