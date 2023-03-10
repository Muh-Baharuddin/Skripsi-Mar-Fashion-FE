import axios from 'axios'
import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useForm } from 'react-hook-form'

type handleShowType = {
  showAdd: boolean
  handleCloseAdd: () => void
}

function AddModalEmployee(props: handleShowType) {
  const { register, handleSubmit } = useForm()
  const { showAdd, handleCloseAdd } = props

  const handleAdd = (data: any) => {
    axios
      .post(`${process.env.API_ENDPOINT}karyawan`, data)
      .then((response) => {
        alert('Data berhasil ditambahkan')
        window.location.reload()
      })
  }

  return (
    <>
      <Modal
        show={showAdd}
        onHide={handleCloseAdd}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Tambah Karyawan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(handleAdd)}>
            <div className="mb-3">
              <label className="form-label">
                Nama
              </label>
              <input
                type="text"
                className="form-control"
                {...register('nama', { required: true })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Alamat
              </label>
              <input
                type="text"
                className="form-control"
                {...register('alamat', { required: true })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Nomor Telepon
              </label>
              <input
                type="text"
                className="form-control"
                {...register('nomor_telepon', { required: true })}
              />
            </div>
            <Button variant="primary" onClick={() => handleAdd} type="submit">
              Submit
            </Button>
            <Button
              className="mx-2"
              variant="secondary"
              onClick={handleCloseAdd}
            >
              Close
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AddModalEmployee
