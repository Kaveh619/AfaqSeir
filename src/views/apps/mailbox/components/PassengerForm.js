import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Button, Row, Col, Container, Modal } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { BsCheck, BsDash, BsNodeMinus, BsPlus } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { bookFlight } from '../mailboxSlice';

// اعتبارسنجی اطلاعات مسافران
const passengerSchema = Yup.object().shape({
  type: Yup.string().required('نوع مسافر الزامی است'),
  gender: Yup.string().required('جنسیت الزامی است'),
  prefix: Yup.string().required('عنوان الزامی است'),
  given_name: Yup.string().required('نام انگلیسی الزامی است'),
  surname: Yup.string().required('نام خانوادگی انگلیسی الزامی است'),
  persian_given_name: Yup.string().required('نام فارسی الزامی است'),
  persian_surname: Yup.string().required('نام خانوادگی فارسی الزامی است'),
  birthdate: Yup.string().required('تاریخ تولد الزامی است'),
  national_id: Yup.string().required('کد ملی الزامی است'),
});

const reservationSchema = Yup.object().shape({
  passengers: Yup.array().of(passengerSchema),
});

const PassengerForm = ({ show, setShow, flightData }) => {
  const [response, setResponse] = useState(null);

  const dispatch = useDispatch();
  const [booking, setBooking] = useState(false);
  const handleSubmit = async (values) => {
    try {
      // const result = await axios.post('/flight/Book', values);
      setBooking(true);
      const result = await dispatch(bookFlight({ flightBookData: values }));
      setResponse(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (response) setBooking(false);
  }, [response]);

  if (!show) return null;

  // eslint-disable-next-line camelcase
  const { departure, arrival, date, price, ref_number } = flightData;
  return (
    // <Modal id="searchPagesModal" className="modal-under-nav modal-search modal-close-out" size="lg" show={show} onHide={() => setShow(false)}>
    //   <Modal.Header className="border-0 p-0" />
    //   <Modal.Body className="ps-5 pe-5 pb-0 border-0">

    <Container className="mt-5">
      <h3>فرم رزرو پرواز</h3>
      <Formik
        initialValues={{
          outbound: {
            ref_number,
            departure: departure.location_code,
            arrival: arrival.location_code,
            date: departure.date,
          },
          receiver: {
            mobile: '09033400110',
          },
          price: {
            currency_code: 'IRR',
            total: price,
          },
          passengers: [
            {
              type: 'ADT',
              gender: 'M',
              prefix: 'Mr',
              given_name: '',
              surname: '',
              persian_given_name: '',
              persian_surname: '',
              birthdate: '',
              national_id: '',
              telephone: '',
              email: 'example@gmail.com',
              nationality: 'IRN',
            },
          ],
        }}
        validationSchema={reservationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched }) => (
          <Form>
            <FieldArray name="passengers">
              {({ remove, push }) => (
                <>
                  {values.passengers.map((_, index) => (
                    <div key={index} className="border p-3 mb-3 rounded-lg">
                      <h5>مسافر {index + 1}</h5>
                      <Row>
                        <Col md={6}>
                          <label>نوع مسافر</label>
                          <Field as="select" name={`passengers[${index}].type`} className="form-control">
                            <option value="ADT">بزرگسال</option>
                            <option value="CHD">کودک</option>
                            <option value="INF">نوزاد</option>
                          </Field>
                        </Col>
                        <Col md={6}>
                          <label>جنسیت</label>
                          <Field as="select" name={`passengers[${index}].gender`} className="form-control">
                            <option value="M">مرد</option>
                            <option value="F">زن</option>
                          </Field>
                        </Col>
                        <Col md={6}>
                          <label>نام (انگلیسی)</label>
                          <Field name={`passengers[${index}].given_name`} className="form-control" />
                        </Col>
                        <Col md={6}>
                          <label>نام خانوادگی (انگلیسی)</label>
                          <Field name={`passengers[${index}].surname`} className="form-control" />
                        </Col>
                        <Col md={6}>
                          <label>نام (فارسی)</label>
                          <Field name={`passengers[${index}].persian_given_name`} className="form-control" />
                        </Col>
                        <Col md={6}>
                          <label>نام خانوادگی (فارسی)</label>
                          <Field name={`passengers[${index}].persian_surname`} className="form-control" />
                        </Col>
                        <Col md={6}>
                          <label>تاریخ تولد</label>
                          <Field type="date" name={`passengers[${index}].birthdate`} className="form-control" />
                        </Col>
                        <Col md={6}>
                          <label>کد ملی</label>
                          <Field name={`passengers[${index}].national_id`} className="form-control" />
                        </Col>
                        <Col md={6}>
                          <label>شماره موبایل</label>
                          <Field type="mobile" name={`passengers[${index}].telephone`} className="form-control" />
                        </Col>
                        <Col md={6}>
                          <label>ایمیل</label>
                          <Field name={`passengers[${index}].email`} className="form-control" />
                        </Col>
                      </Row>
                      <Button variant="danger" className="mt-3" onClick={() => remove(index)} disabled={values.passengers.length === 1}>
                        حذف <BsDash />
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="primary"
                    className="mt-3"
                    onClick={() =>
                      push({
                        type: 'ADT',
                        gender: 'M',
                        prefix: 'Mr',
                        given_name: '',
                        surname: '',
                        persian_given_name: '',
                        persian_surname: '',
                        birthdate: '',
                        national_id: '',
                        email: 'example@gmail.com',
                        telephone: '',
                        nationality: 'IRN',
                      })
                    }
                  >
                    اضافه کردن مسافر
                    <BsPlus />
                  </Button>
                </>
              )}
            </FieldArray>
            <Button type="submit" variant="success" className="mt-3 mx-1">
              صدور بلیت
              <BsCheck />
            </Button>
            {/* {JSON.stringify(values)} */}
          </Form>
        )}
      </Formik>
      {booking && (
        <div className="mt-5">
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      )}
      {response && !booking && (
        <div className="mt-5">
          <h4>
            نتیجه رزرو:<span className={`${response?.status === 'success' ? 'text-success' : 'text-danger'}`}>{response?.status}</span>
          </h4>
          {/* <pre>{JSON.stringify(response, null, 2)}</pre> */}

          <span>شناسه:</span>
          {response?.refrence_id}
        </div>
      )}
    </Container>
    //   </Modal.Body>
    //   <Modal.Footer className="border-top justify-content-start ps-5 pe-5 pb-3 pt-3 border-0">
    //     <span className="text-alternate d-inline-block m-0 me-3">
    //       <CsLineIcons icon="arrow-bottom" size="15" className="text-alternate align-middle me-1" />
    //       <span className="align-middle text-medium">Navigate</span>
    //     </span>
    //     <span className="text-alternate d-inline-block m-0 me-3">
    //       <CsLineIcons icon="arrow-bottom-left" size="15" className="text-alternate align-middle me-1" />
    //       <span className="align-middle text-medium">Select</span>
    //     </span>
    //   </Modal.Footer>
    // </Modal>
  );
};

export default PassengerForm;
