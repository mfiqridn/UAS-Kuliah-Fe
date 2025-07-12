import { useState, useEffect } from "react";
import Alert from "../Alert/Alert";
import formimg from "../../assets/image/form.png";
import {
  Container,
  FormSection,
  FormLeft,
  FormRight,
  Title,
  FormContainer,
  FormGroup,
  Label,
  Select,
  Input,
  Button,
} from "./StyledForm";
import data from "../../utils/data/provinces";

function FormCovid({ onSubmit }) {
  const [provinces, setProvinces] = useState([]);

  const [formData, setFormData] = useState({
    province: "",
    status: "",
    jumlah: "",
  });

  const [formError, setFormError] = useState({
    province: false,
    status: false,
    jumlah: false,
  });

  const { province, status, jumlah } = formData;
  const {
    province: isProvinceError,
    status: isStatusError,
    jumlah: isJumlahError,
  } = formError;

  useEffect(() => {
    if (data?.provinces?.length) {
      setProvinces(data.provinces);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const errors = {
      province: province.trim() === "",
      status: status.trim() === "",
      jumlah: jumlah === "" || isNaN(jumlah) || Number(jumlah) <= 0,
    };
    setFormError(errors);
    return !Object.values(errors).some(Boolean);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onSubmit?.({
      province,
      status,
      jumlah: Number(jumlah),
    });

    setFormData({
      province: "",
      status: "",
      jumlah: "",
    });

    setFormError({
      province: false,
      status: false,
      jumlah: false,
    });
  };

  return (
    <FormContainer>
      <FormSection>
        <FormLeft>
          <img src={formimg} alt="Form Covid" />
        </FormLeft>

        <FormRight>
          <Title>Form Covid</Title>
          <form onSubmit={handleSubmit}>
            <FormContainer>
              <FormGroup>
                <Label htmlFor="province">Provinsi</Label>
                <Select
                  name="province"
                  id="province"
                  value={province}
                  onChange={handleChange}
                >
                  <option value="">Pilih Provinsi</option>
                  {provinces.map((item, index) => (
                    <option key={index} value={item.kota}>
                      {item.kota}
                    </option>
                  ))}
                </Select>
                {isProvinceError && <Alert>Provinsi wajib dipilih</Alert>}
              </FormGroup>

              {/* Status */}
              <FormGroup>
                <Label htmlFor="status">Status</Label>
                <Select
                  name="status"
                  id="status"
                  value={status}
                  onChange={handleChange}
                >
                  <option value="">Pilih Status</option>
                  <option value="confirmed">Positif</option>
                  <option value="sembuh">Sembuh</option>
                  <option value="meninggal">Meninggal</option>
                  <option value="dirawat">Dirawat</option>
                </Select>
                {isStatusError && <Alert>Status wajib dipilih</Alert>}
              </FormGroup>

              {/* Jumlah */}
              <FormGroup>
                <Label htmlFor="jumlah">Jumlah</Label>
                <Input
                  type="number"
                  name="jumlah"
                  id="jumlah"
                  placeholder="Masukkan jumlah kasus"
                  value={jumlah}
                  onChange={handleChange}
                />
                {isJumlahError && <Alert>Jumlah harus lebih dari 0</Alert>}
              </FormGroup>

              <Button type="submit">Submit</Button>
            </FormContainer>
          </form>
        </FormRight>
      </FormSection>
    </FormContainer>
  );
}

export default FormCovid;
