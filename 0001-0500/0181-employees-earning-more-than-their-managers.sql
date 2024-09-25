SELECT
    emp.name AS Employee
FROM
    Employee AS emp
    INNER JOIN Employee AS mgr ON emp.managerId = mgr.id
WHERE
    emp.salary > mgr.salary -- Inspired by Database Helper