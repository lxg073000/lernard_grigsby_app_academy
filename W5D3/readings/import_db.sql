CREATE TABLE plays (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    year INTEGER NOT NULL,
    playwright_id INTEGER NOT NULL,

    FOREIGN KEY (playwright_id) REFERENCES playwrights(id)
);

CREATE TABLE playwrights (
  id, INTEGER PRIMARY KEY
  name TEXT NOT NULL,
  birth_year, INTEGER
);

INSERT INTO
  playwrights (name, birth_year)
VALUES
  ('Ashley Simpson', 1999),
  ('Bart, Heavve', 1777);

INSERT INTO
  plays(title, year, playwright_id)
VALUES
  ('All my sons', 1947, (SELECT id FROM playwrights WHERE name = 'Ashley Simpson')),
  ('Something Else', 2005, (SELECT id FROM playwrights WHERE name = 'Bart'));

