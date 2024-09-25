SELECT
    Customers.name AS Customers
FROM
    Customers
    LEFT JOIN Orders ON Customers.id = orders.customerId
WHERE
    Orders.id IS NULL