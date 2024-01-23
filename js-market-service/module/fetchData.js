const fetchSectionListData = async () => {
    // fetch and return the data if the process is successful; otherwise, return an empty array
    try {
        const res = await fetch('./public/mock/sectionListData.json');
        const data = await res.json();
        return data?.sectionInfoList || [];
    } catch (error) {
        console.log(error);
        return [];
    }
}

export default fetchSectionListData;