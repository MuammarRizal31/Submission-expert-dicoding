const assert = require("assert");
Feature("Favorite Restaurant");
Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

const emptyFavorite = "Empty favorite";
Scenario("Menampilkan favorite restaurant kosong", ({ I }) => {
  I.seeElement("#favorite");
  I.see(emptyFavorite, "#favorite");
});

Scenario("Liking one restaurant", async ({ I }) => {
  I.see(emptyFavorite, "#favorite");

  I.amOnPage("/");
  I.seeElement(".deskripsi h2 a");
  const firstRestoCard = locate(".judul").first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".deskripsi");
  const likedCardTitle = await I.grabTextFrom(".judul");
  assert.strictEqual(firstRestoCardTitle, likedCardTitle);
});

Scenario("unliking one restaurant", async ({ I }) => {
  I.amOnPage("/");
  I.seeElement(".deskripsi");
  const likedCardTitle = await I.grabTextFrom(".judul a");
  I.click(likedCardTitle);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement("#favorite");

  const liked2CardTitle = await I.grabTextFrom(".judul a");
  I.click(liked2CardTitle);

  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.dontSeeElement(".deskripsi");
  I.dontSeeElement(".judul a");
});
