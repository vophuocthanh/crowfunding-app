import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import FormGroup from "../../components/common/FormGroup";
import FormRow from "../../components/common/FormRow";
import { Dropdown } from "../../components/dropdown";
import { Input, Textarea } from "../../components/input";
import { Label } from "../../components/label";
import "react-quill/dist/quill.snow.css";
import ReactQuill, { Quill } from "react-quill";
import ImageUploader from "quill-image-uploader";
import { Button } from "../../components/button";
import useOnChange from "../../hooks/useOnChange";
Quill.register("modules/imageUploader", ImageUploader);
// import axios from "axios";

const CampaignAddNew = () => {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { isValid, isSubmitting },
  } = useForm();
  const handleAddNewCampaign = () => {};
  const [content, setContent] = useState("");
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        // imgbbAPI
        upload: async (file) => {
          // const bodyFormData = new FormData();
          // bodyFormData.append("image", file);
          // const response = await axios({
          //   method: "post",
          //   url: imgbbAPI,
          //   data: bodyFormData,
          //   headers: {
          //     "Content-Type": "multipart/form-data",
          //   },
          // });
          // return response.data.data.url;
        },
      },
    }),
    []
  );

  const handleSelectDropdownOption = (name, value) => {
    setValue(name, value);
  };

  // const handleSelectCategory = (value) => {
  //   setValue("category", value);
  // };

  const [countries, setCountries] = useState([]);
  // https://restcountries.com/v3.1/name/peru
  const [filterCountry, setFilterCountry] = useOnChange(500);
  useEffect(() => {
    if (!filterCountry) return;
    async function fetchCountries() {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${filterCountry}`
        );
        console.log("fetchCountries ~ response:", response);
        setCountries(response.data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchCountries();
  }, [filterCountry]);

  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="text-center">
        <h1 className="py-4 px-14 bg-text4 bg-opacity-10 rounded-xl font-bold text-[25px] inline-block mb-10">
          Start a Campaign 🚀
        </h1>
        <form onSubmit={handleSubmit(handleAddNewCampaign)}>
          {/* Input */}
          <FormRow>
            <FormGroup>
              <Label>Campaign Title *</Label>
              <Input
                control={control}
                name="title"
                placeholder="Write a title"
              ></Input>
            </FormGroup>
            {/* Dropdown */}
            <FormGroup>
              <Label>Select a category *</Label>
              <Dropdown>
                <Dropdown.Select placeholder="Select a category"></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option
                    onClick={() =>
                      handleSelectDropdownOption("category", "architecture")
                    }
                  >
                    Architecture
                  </Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
          </FormRow>
          {/* Desc */}
          <FormGroup>
            <Label>Short Description *</Label>
            <Textarea
              control={control}
              placeholder="Write a short description...."
              name="short_description"
            ></Textarea>
          </FormGroup>
          {/* Textarea */}
          <FormGroup>
            <Label>Story *</Label>
            <ReactQuill
              placeholder="Write your story......"
              modules={modules}
              theme="snow"
              value={content}
              onChange={setContent}
            />
          </FormGroup>
          <FormRow>
            {/* Goal */}
            <FormGroup>
              <Label>Goal *</Label>
              <Input
                control={control}
                name="goal"
                placeholder="$0.00 USD"
              ></Input>
            </FormGroup>
            {/* >Raised Amount */}
            <FormGroup>
              <Label>Raised Amount *</Label>
              <Input
                control={control}
                name="amount"
                placeholder="$0.00 USD"
              ></Input>
            </FormGroup>
          </FormRow>
          {/*Amount Prefilled and Video */}
          <FormRow>
            <FormGroup>
              <Label>Amount Prefilled</Label>
              <Input
                control={control}
                name="prefilled"
                placeholder="Amount Prefilled"
              ></Input>
              <p className="text-left text-text3 text-sm">
                It will help fill amount box by click, place each amount by
                comma, ex: 10,20,30,40
              </p>
            </FormGroup>
            <FormGroup>
              <Label>Video</Label>
              <Input control={control} name="video" placeholder="Video"></Input>
              <p className="text-left text-text3 text-sm">
                Place Youtube or Vimeo Video URL
              </p>
            </FormGroup>
          </FormRow>
          {/* Dropdown */}
          <FormRow>
            <FormGroup>
              <Label>Campaign End Method</Label>
              <Dropdown>
                <Dropdown.Select placeholder="Select one"></Dropdown.Select>
                <Dropdown.List></Dropdown.List>
              </Dropdown>
            </FormGroup>
            <FormGroup>
              <Label>Country</Label>
              <Dropdown>
                <Dropdown.Select placeholder="Select a country"></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Search
                    placeholder="Search country..."
                    onChange={setFilterCountry}
                  ></Dropdown.Search>
                  {countries.length > 0 &&
                    countries.map((country) => (
                      <Dropdown.Option
                        key={country?.name?.common}
                        onClick={() =>
                          handleSelectDropdownOption(
                            "country",
                            country?.name?.common
                          )
                        }
                      >
                        {country?.name?.common}
                      </Dropdown.Option>
                    ))}
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
          </FormRow>
          <FormRow>
            {/* Start Date */}
            <FormGroup>
              <Label>Start Date</Label>
              <Input
                control={control}
                name="start_date"
                placeholder="Start Date"
              ></Input>
            </FormGroup>
            {/* >End Date */}
            <FormGroup>
              <Label>End Date</Label>
              <Input
                control={control}
                name="end_date"
                placeholder="End Date"
              ></Input>
            </FormGroup>
          </FormRow>
          <div className="text-center">
            <Button
              // kind="primary"
              className="bg-primary text-white mx-auto mt-10 px-10"
            >
              Submit new campaign
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignAddNew;
