QUnit.module('row', function() {
    QUnit.test('létezik-e', function(assert) {
        assert.ok(row, "létezik a row");
    });
    QUnit.test('függvény-e', function(assert) {
        assert.ok(typeof row === "function", "a row függvény");
    });
    QUnit.test('üres', function(assert) {
        assert.equal(row(), false);
    });
    QUnit.test('elsőjatekos nyert', function(assert) {
        tomb=["O","O","O","X","X","-","-","-","-"]
        assert.equal(row(), true);

    });
    QUnit.test('masodik jatekos nyert', function(assert) {
        tomb=["O","O","-","X","X","X","-","-","-"]
        assert.equal(row(), true);
    });
});
QUnit.module('column', function() {
    QUnit.test('létezik-e', function(assert) {
        assert.ok(row, "létezik a column");
    });
    QUnit.test('függvény-e', function(assert) {
        assert.ok(typeof column === "function", "a column függvény");
    });
});
QUnit.module('cross', function() {
    QUnit.test('létezik-e', function(assert) {
        assert.ok(row, "létezik a cross");
    });
    QUnit.test('függvény-e', function(assert) {
        assert.ok(typeof cross === "function", "a cross függvény");
    });
});
QUnit.module('balrolJobra', function() {
    QUnit.test('létezik-e', function(assert) {
        assert.ok(row, "létezik a balrolJobra");
    });
    QUnit.test('függvény-e', function(assert) {
        assert.ok(typeof balrolJobra === "function", "a balrolJobra függvény");
    });
});
QUnit.module('jobbrolBalra', function() {
    QUnit.test('létezik-e', function(assert) {
        assert.ok(row, "létezik a jobbrolBalra");
    });
    QUnit.test('függvény-e', function(assert) {
        assert.ok(typeof jobbrolBalra === "function", "a jobbrolBalra függvény");
    });
});