import React, { useEffect, useState, useCallback } from 'react'
import ListRegistros from "../Componets/ListRegistros"

const ListRegistrosPage = () => {

    const data = [
        { idFestivo: 926, diaFestivo: "2021-07-01", descipcion: "prueba", idProceso: 368 },
        { idFestivo: 943, diaFestivo: "2021-07-12", descipcion: "ooo", idProceso: 368 },
        { idFestivo: 964, diaFestivo: "2021-07-15", descipcion: "", idProceso: 368 },
        { idFestivo: 968, diaFestivo: "2021-04-21", descipcion: "", idProceso: 368 }
    ];

    const [listData, setListData] = useState([])
    const [searchIdFestivo, setSearchIdFestivo] = useState("")
    const [loading, setLoading] = useState(true)

    const searchById = (event) => {
        setSearchIdFestivo(event.target.value)
    }

    const filteredData = useCallback(() => {
        if (searchIdFestivo.length === 0) {
            setListData(data)
        }
        else {
            const filtered = data.filter(dia => dia.idFestivo.toString().includes(searchIdFestivo));
            setListData(filtered)
        }
    }, [searchIdFestivo])

    useEffect(() => {
        setLoading(true)
        filteredData()
        setTimeout(() => {
            setLoading(false)
        }, 600)
    }, [filteredData, searchIdFestivo])

    return (
        <React.Fragment>
            <ListRegistros listData={listData} searchById={searchById} loading={loading} />
        </React.Fragment>
    )
}
export default ListRegistrosPage