import React, { useState } from 'react'
import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom';

const EditBooks = () => {
  const {id} = useParams();
  const {artTitle, authorName, imageURL, category, artDescription, artPDFURL} = useLoaderData();
  
  const bookCategories = [
    "Abstract",
    "Landscape",
    "Animal",
    "Flower",
    "Forest",
    "Sculpture",
    "Painting",
    "Human",
    "Living",
    "Fantasy",
    "Photograph",
    "Other",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    //console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const artTitle = form.artTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const artDescription = form.artDescription.value;
    const artPDFURL = form.artPDFURL.value;

    const updatedArtObj = {
      artTitle,
      authorName,
      imageURL,
      category,
      artDescription,
      artPDFURL,
    };
    //console.log(updatedArtObj);

    //update book data
    fetch(`http://localhost:5000/art/${id}`, {
      method: "PATCH",
      headers:{
        "Content-Type": "application/json"
      },
    body: JSON.stringify(updatedArtObj)
    }).then((res) => res.json()).then((data) => {
        //console.log(data);
        alert("Art Updated Successfully!");
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Edit a book</h2>

      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        {/* first row */}
        <div className="flex gap-8">
          {/* art title */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="artTitle" value="Art Title" />
            </div>
            <TextInput
              id="artTitle"
              name="artTitle"
              type="text"
              placeholder="Title of your artwork"
              required
              defaultValue={artTitle}
            />
          </div>
          {/* author name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Name of Creator"
              required
              defaultValue={authorName}
            />
          </div>
          {/*  */}
        </div>

        {/* second row */}
        <div className="flex gap-8">
          {/* imageURL */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Art Image" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Book Image URL"
              required
              defaultValue={imageURL}
            />
          </div>
          {/* category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Art Category" />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* third row - book Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="artDescription" value="Art Description" />
          </div>
          <Textarea
            id="artDescription"
            name="artDescription"
            placeholder="Write your Art Description"
            required
            rows={4}
            className="w-full"
            defaultValue={artDescription}
          />
        </div>

        {/* art pdf link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="artPDFURL" value="Creator Link" />
          </div>
          <TextInput
            id="artPDFURL"
            name="artPDFURL"
            type="text"
            placeholder="Creator link"
            required
            defaultValue={artPDFURL}
          />
        </div>

        <Button className="mt-5" type="submit">
          Update Art
        </Button>
      </form>
    </div>
  );
}

export default EditBooks
