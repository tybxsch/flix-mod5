import axios from "axios";

const instance = axios.create({
    baseURL: "https://devfli.herokuapp.com"
});

export const getSeries = async () => {
    const response = await instance.get("/series");
    const json = await response.data['Series catalogadas'];
    console.log(json)
    return json;
};
getSeries();
export const getSeriesPorGenero = async (genre) => {
    const response = await instance.get(`/series/${genre}`);
    const json = await response.data.series;
    return json;
  };

export const getSeriesById = async (id) => {
    const response = await instance.get(`/series/${id}`);
    const json = await response.data.series;
    return json;
};

export const postSeries = async (body) => {
    const response = await instance.post("/series/novaSerie", body);
    const json = await response.data; //estava response.data.msg (msg ao que tudo indica não existe na apin)
    return json;
};

export const editSeries = async (id, body) => {
    const response = await instance.put(`/series/${id}`, body);
};

export const deleteSeries = async (id) => {
    const response = await instance.delete(`/series/${id}`);
};