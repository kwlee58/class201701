monty.hall <-
function() {
  key <- sample(1:3, size = 1)
  goat <- setdiff(1:3, key)
  contestant <- sample(1:3, size = 1)
  monty <- ifelse(contestant == key, sample(goat, size = 1), setdiff(goat, contestant))
  switch <- setdiff(1:3, c(contestant, monty))
  result <- ifelse(switch == key, 1, 0)
  # result
  c("Key" = key, "Contestant" = contestant, "Monty" = monty, "Switch" = switch, "Result" = result)
}
monty.plot <-
function(N) {
monty.result <- replicate(N, monty.hall())
# monty.result
# monty.result[5, ]
# cumsum(monty.result[5, ])
y <- cumsum(monty.result[5, ])
y_win <- ifelse(monty.result[5, ] == 1, y, NA)
y_win
y_lose <- ifelse(monty.result[5, ] == 1, NA, y)
y_lose
plot(x = 1:N, 
     y = y_win / N, 
     pch = "o", 
     col = "blue", 
#     bg = "blue", 
     ylim = c(0, 4/5),
     xlab = "Number of Trials",
     ylab = "Proportion of Wins",
     yaxt = "n",
     cex = 0.7)
axis(side = 2, 
     at = c(0, 1/3, 2/3, 3/4), 
     labels = c("0", "1/3", "2/3", "3/4"),
     las = 2)
points(x = 1:N, 
       y = y_lose / N, 
       pch = "x", 
       col = "red", 
#       bg = "red", 
       cex = 0.7)
abline(h = 2/3, lty = 3)
legend("topleft", 
       inset = 0.05, 
       legend = c("Win", "Lose"), 
       pch = c("o", "x"), 
       col = c("blue", "red")) 
#       pt.bg = c("blue", "red"))
# table(unlist(monty.result[5, ]))
x.text <- N / 3 * 2
y.text <- 1/6
text(x = x.text, y = y.text, 
     labels = paste(N, " trials,\n",
                    sum(monty.result[5, ]), " wins,\n",
                    format(sum(monty.result[5, ])/N * 100, digits = 3, nsmall = 1),
                    "% winning",
                    sep = "" ),
     pos = 4)
title(main = "Monty Hall Simulation")
}
