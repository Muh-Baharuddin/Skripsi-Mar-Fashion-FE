import { usePenjualanContext } from '../Penjualan'
import FilterComp from './Components/FilterComp'
import 'bootstrap-icons/font/bootstrap-icons.css'

const TablePenjualan = () => {
  const { queryParams, setQueryParams } = usePenjualanContext()
  
  return (
    <>
      <div className="card-body">
        <FilterComp />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Tanggal</th>
              <th>Barang</th>
              <th>Jumlah</th>
              <th>Harga Barang</th>
              <th>Action</th>
            </tr>
          </thead>
        <tbody>
            {data &&
              Object.values(data).map((d, index) => {
                return (
                  <tr key={d.id}>
                    <td>
                      {(queryParams.page-1) * queryParams.limit + index + 1}
                    </td>
                    <td>{d.tanggal}</td>
                    <td>{d.barang}</td>
                    <td>{d.jumlah}</td>
                    <td>{d.harga}</td>
                    <td>
                      <button
                        className="btn btn-primary ms-3"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                      <button
                        className="btn btn-danger ms-3"
                      >
                        <i className="bi bi-trash3-fill"></i>
                      </button>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TablePenjualan