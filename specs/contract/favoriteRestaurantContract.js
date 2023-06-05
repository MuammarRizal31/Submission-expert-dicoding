const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it("Seharusnya mengembalikan restaurant yang telah ditambahkan", async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getRestaurant(1)).toEqual({ id: 1 });
    expect(await favoriteRestaurant.getRestaurant(2)).toEqual({ id: 2 });
    expect(await favoriteRestaurant.getRestaurant(3)).toEqual(undefined);
  });

  it("Seharusnya menolak restaurant ditambahkan jika tidak memiliki properti yang benar", async () => {
    favoriteRestaurant.putRestaurant({ aProperty: "property" });

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([]);
  });

  it("bisa mengembalikan semua restaurant begitu ditambahkan", async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it("seharusnya menghapus restaurant favorit", async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    favoriteRestaurant.putRestaurant({ id: 3 });

    await favoriteRestaurant.deleteRestaurant(1);

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it("harus mengendalikan permintaan untuk menghapus sebuah restaurant meskipun restaurant tersebut belum ditambahkan", async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    favoriteRestaurant.putRestaurant({ id: 3 });

    await favoriteRestaurant.deleteRestaurant(4);

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });

  it("Harus bisa mencari untuk restaurant", async () => {
    favoriteRestaurant.putRestaurant({ id: 1, title: "restaurant a" });
    favoriteRestaurant.putRestaurant({ id: 2, title: "restaurant b" });
    favoriteRestaurant.putRestaurant({ id: 3, title: "restaurant abc" });
    favoriteRestaurant.putRestaurant({ id: 4, title: "restaurant abcdefg" });

    expect(await favoriteRestaurant.searchRestaurant("restaurant a")).toEqual([
      { id: 1, title: "restaurant a" },
      { id: 3, title: "restaurant abc" },
      { id: 4, title: "restaurant abcdefg" },
    ]);
  });
};

export { itActsAsFavoriteRestaurantModel };
