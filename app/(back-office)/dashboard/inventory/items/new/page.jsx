"use client";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import FormHeader from "@/components/dashboard/FormHeader";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const NewItems = () => {
  const categories = [
    {
      label: "Electronics",
      value: "df578htyj",
    },
    {
      label: "Clothes",
      value: "vdfgvfg67tu",
    },
  ];
  const units = [
    {
      label: "Kg",
      value: "df578htyj",
    },
    {
      label: "Pcs",
      value: "vdfgvfg67tu",
    },
  ];

  const brands = [
    {
      label: "HP",
      value: "df578htyj",
    },
    {
      label: "Dell",
      value: "vdfgvfg67tu",
    },
  ];

  const warehouses = [
    {
      label: "Warehouse A",
      value: "df578htyj",
    },
    {
      label: "Warehouse B",
      value: "vdfgvfg67tu",
    },
    {
      label: "Warehouse C",
      value: "vdfgvfg67tu",
    },
  ];

  const suppliers = [
    {
      label: "Supplier A",
      value: "df578htyj",
    },
    {
      label: "Supplier B",
      value: "vdfgvfg67tu",
    },
    {
      label: "Supplier C",
      value: "vdfgvfg67tu",
    },
  ];
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    const baseurl = "http://localhost:3000";
    try {
      const response = await fetch(`${baseurl}/api/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log(response);
        setLoading(false);
        reset();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div>
      <FormHeader title="New Item" href="/dashboard/inventory/" />
      <div className="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6">
            <TextInput
              name="title"
              label="Item Title"
              type="text"
              register={register}
              required
              errors={errors}
              className="w-full"
            />
            <SelectInput
              register={register}
              className="w-full"
              name="categoryId"
              label="Select Item Category "
              options={categories}
            />

            <TextInput
              name="sku"
              label="Item SKU"
              type="text"
              register={register}
              required
              errors={errors}
              className="w-full"
            />

            <TextInput
              name="barcode"
              label="Item Barcode"
              type="text"
              register={register}
              errors={errors}
              className="w-full"
            />
            <TextInput
              name="qty"
              label="Item Quantity"
              type="number"
              register={register}
              errors={errors}
              className="w-full"
            />

            <SelectInput
              register={register}
              className="w-full"
              name="unitId"
              label="Select Item Unit "
              options={units}
            />

            <SelectInput
              register={register}
              className="w-full"
              name="brandId"
              label="Select Item Brand "
              options={brands}
            />

            <TextInput
              name="buyingPrice"
              label="Buying Price"
              type="number"
              register={register}
              errors={errors}
              className="w-full"
            />

            <TextInput
              name="sellingPrice"
              label="Selling Price"
              type="number"
              register={register}
              errors={errors}
              className="w-full"
            />

            <SelectInput
              register={register}
              className="w-full"
              name="supplierId"
              label="Select Item Supplier "
              options={suppliers}
            />

            <TextInput
              name="reOrderPoint"
              label="Re-Order Point"
              type="number"
              register={register}
              errors={errors}
              className="w-full"
            />

            <SelectInput
              register={register}
              className="w-full"
              name="warehouseId"
              label="Select Item Warehouse "
              options={warehouses}
            />

            <TextInput
              name="weight"
              label="Item Weight in Kgs"
              type="number"
              register={register}
              errors={errors}
              className="w-full"
            />

            <TextInput
              name="dimensions"
              label="Item Dimensions in cm (20 x 30 x 100)"
              register={register}
              errors={errors}
              className="w-full"
            />

            <TextInput
              name="taxRate"
              label="Item Tax Rate in %"
              type="number"
              register={register}
              errors={errors}
              className="w-full"
            />

            <TextAreaInput
              name="description"
              label="Item Description"
              type="text"
              register={register}
              errors={errors}
            />

            <TextAreaInput
              name="notes"
              label="Item Notes"
              type="text"
              register={register}
              errors={errors}
            />
          </div>
          <SubmitButton loading={loading} title={"Item"} />
        </form>
      </div>
    </div>
  );
};

export default NewItems;
