paste.p <-
function(tbl) {
t(matrix(paste(format(prop.table(tbl)*100, digits = 2, nsmall = 1), "%", sep = ""), nrow = dim(tbl)[1], dimnames = dimnames(tbl)))
}
