monty.hall <- function() {
  key <- sample(1:3, size = 1)
  goat <- setdiff(1:3, key)
  contestant <- sample(1:3, size = 1)
  monty <- ifelse(contestant == key, sample(goat, size = 1), setdiff(goat, contestant))
  switch <- setdiff(1:3, c(contestant, monty))
  result <- ifelse(switch == key, 1, 0)
  result
  # list("Key" = key, "Contestant" = contestant, "Monty" = monty, "Switch" = switch, "Result" = result)
}
monty.hall()
N <- 10000
monty.result <- replicate(N, monty.hall())
sum(monty.result)/N
